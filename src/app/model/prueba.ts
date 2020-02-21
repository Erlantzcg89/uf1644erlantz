export interface IPrueba {
    id: number;
    titulo: string;
}

export class Prueba implements IPrueba {
    id: number;
    titulo: string;

    constructor() {
        this.id = 0;
        this.titulo = '';
    }
}