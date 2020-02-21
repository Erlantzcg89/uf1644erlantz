export interface INoticia {
    id: number;
    fecha: string;
    titulo: string;
    imagen: string;
    textoCorto: string;
    texto: string;
    url: string;

}

export class Noticia implements INoticia {

    id: number;
    fecha: string;
    titulo: string;
    imagen: string;
    textoCorto: string;
    texto: string;
    url: string;

    constructor() {
        this.id = 0;
        this.fecha = '';
        this.titulo = '';
        this.imagen = '';
        this.textoCorto = '';
        this.texto = '';
        this.url = '';

    }
}