import { Capitulo } from "./Capitulo.model";

export interface Temporada {
    id: number;
    year: number;
    descripcion: string;
    imagen: string;
    capitulos: Capitulo[];
}