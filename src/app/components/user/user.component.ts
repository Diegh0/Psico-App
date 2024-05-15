import { Component, EventEmitter, HostListener, OnInit, Output, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { TemaAppService } from '../../services/tema-app.service';
import { Observable } from 'rxjs';
import { ref, uploadBytesResumable,Storage } from '@angular/fire/storage';
import { getDownloadURL } from 'firebase/storage';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass,RouterLink,NgIf],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<void>();

  authService = inject(AuthService);
  temaService = inject(TemaAppService);
  uploadProgress$!: Observable<number>;
  downloadURL$!:Observable<string>;

  private storage: Storage = inject(Storage);

  modalVisible: boolean = true;
  imageUrl: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  onFileSelected(event: any): void {
    const archivoSeleccionado: File = event.target.files[0];
    this.uploadFile(archivoSeleccionado);
  }

  async uploadFile(file: File): Promise<void> {
    const filePath = `archivos/${file.name}`;
    const fileRef = ref(this.storage, filePath);
    const uploadFile = uploadBytesResumable(fileRef, file);
  
    try {
      await uploadFile;
  
      console.log('El archivo se subió correctamente');
      const url = await getDownloadURL(fileRef);
      console.log('url archivo:', url);
      this.imageUrl = url; // Establece la URL de descarga como la URL de la imagen a mostrar
    } catch (error) {
      console.error('Error al cargar el archivo:', error);
    }
  }
  

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    imgProfile:['',Validators.required],
  });

  onSubmit(): void {
    const rawForm = this.form.getRawValue();
    this.authService
      .register(rawForm.email, rawForm.username, rawForm.password)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }
  
  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
          password: '',
          
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }
  logout(): void {
    this.authService.logout();
  }
  signUpNavigate(){
    this.router.navigate(['/signUp']);
    this.closeModal();
  }
  logInNavigate(){
    this.router.navigate(['/logIn']);
    this.closeModal();
  }
  emocionesNavigate(){
    this.router.navigate(['/emociones']);
    this.closeModal();
  }
  
  closeModal(): void {
    this.closeModalEvent.emit();
  }

  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }

}