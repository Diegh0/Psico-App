import { Component, inject } from '@angular/core';
import { HabilidadesService } from '../../services/habilidades.service';
import { AsyncPipe } from '@angular/common';
import { TemaAppService } from '../../services/tema-app.service';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { Firestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [AsyncPipe,RouterLink,NgFor],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {
  constructor(private firestore: Firestore, private router: Router) {}
  private habilidadesService  = inject(HabilidadesService);
  private temaService  = inject(TemaAppService);
  habilidades = this.habilidadesService.getHabilidades();

  ngOnInit(){
    console.log(this.habilidades);
  }
  toggleTheme(): void {
    this.temaService.toggleTheme();
  }
  isDarkTheme(): boolean {
    return this.temaService.isDarkTheme();
  }
}
