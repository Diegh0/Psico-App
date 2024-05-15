import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { TemaAppService } from '../../services/tema-app.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  temaService = inject(TemaAppService);
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    firstName:['', Validators.required],
    lastName:['', Validators.required]
  });
  onSubmit():void{
    const rawForm = this.form.getRawValue();
    this.authService
    .register(rawForm.email, rawForm.username, rawForm.password)
    .subscribe(()=>{
      this.router.navigateByUrl('/');
    });
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }

}
