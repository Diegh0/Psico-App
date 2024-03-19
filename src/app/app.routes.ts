import { Routes } from '@angular/router';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActividadesComponent } from './components/actividades/actividades.component';

export const routes: Routes = [
    { path:'',component:InicioComponent},
    { path:'habilidades',component:HabilidadesComponent},
    { path:'actividadesTotales', component:ActividadesComponent},
];
