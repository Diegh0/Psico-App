import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {
  authService = inject(AuthService);
  fb = inject(FormBuilder);
  http= inject(HttpClient);
  router = inject(Router);
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  onSubmit():void{
    const rawForm = this.form.getRawValue();
    this.authService
    .register(rawForm.email, rawForm.username, rawForm.password)
    .subscribe(()=>{
      this.router.navigateByUrl('/');
    });
  }
}
