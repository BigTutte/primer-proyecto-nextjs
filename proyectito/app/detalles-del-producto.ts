export interface Producto { //https://www.typescriptlang.org/docs/handbook/2/objects.html#introduction
    id: string;
    imageUrl: string;
    Nombre: string;
    descripcion: string;
    precio: number;
}

export const productos: Producto[] = [
    { // FIXME: direcciones de imagenes 
        id: '1',
        imageUrl: 'remera-negra.jpg',
        Nombre: 'Remera negra',
        descripcion: 'Remera de color negro.',
        precio: 100
    },
    {
        id: '2',
        imageUrl: 'pantalon-negro.jpg',
        Nombre: 'Pantalon Negro',
        descripcion: 'Pantalon de color negro.',
        precio: 200
    },
    {
        id: '3',
        imageUrl: 'collar-negro.png',
        Nombre: 'Cadena negra',
        descripcion: 'Cadena de color negro.',
        precio: 300
    }
]