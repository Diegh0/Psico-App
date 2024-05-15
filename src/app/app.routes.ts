import { Routes } from '@angular/router';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { HailidadDetalleComponent } from './components/hailidad-detalle/hailidad-detalle.component';
import { DiarioComponent } from './components/diario/diario.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { EmocionesComponent } from './components/emociones/emociones.component';
import { VideosComponent } from './components/videos/videos.component';
import { MeditacionComponent } from './components/meditacion/meditacion.component';

export const routes: Routes = [
    { path:'',component:InicioComponent},
    { path:'habilidades',component:HabilidadesComponent},
    { path:'actividadesTotales', component:ActividadesComponent},
    { path:'habilidadDetalle/:id', component:HailidadDetalleComponent},
    { path:'diario',component:DiarioComponent},
    { path:'signUp',component:RegistroComponent},
    { path:'logIn', component:LoginComponent},
    { path:'user', component:UserComponent},
    { path:'emociones', component:EmocionesComponent},
    { path:'videos/:sentimiento',component: VideosComponent},
    { path:'meditacion',component: MeditacionComponent},
    { path:'**',component:ErrorPageComponent}
];
