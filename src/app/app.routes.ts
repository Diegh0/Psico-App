import { Routes } from '@angular/router';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
    {path:'',component:InicioComponent},
    {path:'habilidades',component:HabilidadesComponent},
];
