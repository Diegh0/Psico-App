import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../Models/User';
import { CommonModule, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
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
