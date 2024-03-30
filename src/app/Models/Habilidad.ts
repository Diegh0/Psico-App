import { Actividad } from "./Actividad";
import { Tip } from "./Tip";

export interface Habilidad{
    id:string,
    nombre:string,
    urlImg:string,
    tips:string,
    subtitulo:string,
    txt1:string,
    txt2:string,
    txt3?:string,
    txt4?:string
}
