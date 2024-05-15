import { Component, EventEmitter, Output, inject } from '@angular/core';
import { EmocionesService } from '../../services/emociones.service';
import { AsyncPipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { VideosService } from '../../services/videos.service';
import { TemaAppService } from '../../services/tema-app.service';

@Component({
  selector: 'app-emociones',
  standalone: true,
  imports: [AsyncPipe,NgClass],
  templateUrl: './emociones.component.html',
  styleUrl: './emociones.component.scss'
})
export class EmocionesComponent {
  
  constructor(private emocionesService : EmocionesService,  private router : Router, private videoService : VideosService){}
  
  temaService = inject(TemaAppService);
  emociones = this.emocionesService.getEmociones();

  getSentimiento(sentimiento : string){
    this.router.navigate(['/videos', sentimiento]);
  }
  toggleTheme(): void {
    this.temaService.toggleTheme();
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }
  
  
}
