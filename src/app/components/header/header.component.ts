import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule, NgIf } from '@angular/common';
import { TemaAppService } from '../../services/tema-app.service';
import { UserComponent } from '../user/user.component';

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [RouterLink, FormsModule, MatSlideToggleModule, CommonModule, UserComponent, NgIf]
})
export class HeaderComponent {
  public temaService  = inject(TemaAppService);
  modalVisible:boolean = false;

  openModal(){
    this.modalVisible = true;
  }
  closeModal(){
    this.modalVisible = false;
  }
  toggleTheme(): void {
    this.temaService.toggleTheme();
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }
  
}
