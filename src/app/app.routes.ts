import { Routes } from '@angular/router';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { HailidadDetalleComponent } from './components/hailidad-detalle/hailidad-detalle.component';
import { ActividadDetalleComponent } from './components/actividad-detalle/actividad-detalle.component';
import { DiarioComponent } from './components/diario/diario.component';

export const routes: Routes = [
    { path:'',component:InicioComponent},
    { path:'habilidades',component:HabilidadesComponent},
    { path:'actividadesTotales', component:ActividadesComponent},
    { path:'habilidadDetalle/:id', component:HailidadDetalleComponent},
    { path:'actividadDetalle/:id', component:ActividadDetalleComponent},
    { path:'diario',component:DiarioComponent}
];
