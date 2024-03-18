import { Actividad } from "./Actividad";
import { Tip } from "./Tip";

export interface Habilidad{
    id:number,
    nombre:string,
    urlImg:string,
    actividades:Actividad[],
    tips:Tip[]
}
