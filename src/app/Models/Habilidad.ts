import { Actividad } from "./Actividad";
import { Tip } from "./Tip";

export interface Habilidad{
    id:string,
    nombre:string,
    urlImg:string,
    actividades:Actividad[],
    tips:Tip[]
}
