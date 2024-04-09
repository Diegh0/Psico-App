import { Component, EventEmitter, HostListener, OnInit, Output, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { TemaAppService } from '../../services/tema-app.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass,RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  @Output() closeModalEvent = new EventEmitter<void>();

  authService = inject(AuthService);
  temaService = inject(TemaAppService);
  modalVisible: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
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
  
  closeModal(): void {
    this.closeModalEvent.emit();
  }

  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }

}
