export interface Producto { //https://www.typescriptlang.org/docs/handbook/2/objects.html#introduction
    type: string; //pantalon, collar y remera
    id: string;
    imageUrl: string;
    Nombre: string;
    descripcion: string;
    precio: number;
}

export const productos: Producto[] = [
    { // FIXME: direcciones de imagenes 
        type: 'remera',
        id: '1',
        imageUrl: 'remera-negra.jpg',
        Nombre: 'Remera negra',
        descripcion: 'Remera de color negro.',
        precio: 100
    },
    {
        type: 'pantalon',
        id: '2',
        imageUrl: 'pantalon-negro.jpg',
        Nombre: 'Pantalon Negro',
        descripcion: 'Pantalon de color negro.',
        precio: 200
    },
    {
        type: 'collar',
        id: '3',
        imageUrl: 'collar-negro.png',
        Nombre: 'Cadena negra',
        descripcion: 'Cadena de color negro.',
        precio: 300
    },
    {
        type: 'collar',
        id:'4',
        imageUrl: 'collar-rojo.jpg',
        Nombre: 'Cadena roja',
        descripcion: 'Cadena de color rojo.',
        precio: 300
    },
    {
        type: 'collar',
        id:'5',
        imageUrl: 'collar-verde.jpeg',
        Nombre: 'Cadena verde',
        descripcion: 'Cadena de color verde.',
        precio: 300
    },
    {
        type: 'collar',
        id:'6',
        imageUrl: 'collar-azul.jpg',
        Nombre: 'Cadena azul',
        descripcion: 'Cadena de color azul.',
        precio: 300
    },
    {
        type: 'pantalon',
        id:'7',
        imageUrl: 'pantalon-azul.jpeg',
        Nombre: 'Pantalon azul',
        descripcion: 'Pantalon de color azul.',
        precio: 200
    },
    {
        type: 'pantalon',
        id:'8',
        imageUrl: 'pantalon-rojo.jpeg',
        Nombre: 'Pantalon rojo',
        descripcion: 'Pantalon de color rojo.',
        precio: 200
    },
    {
        type: 'remera',
        id:'10',
        imageUrl: 'remera-azul.jpg',
        Nombre: 'Remera azul',
        descripcion: 'Remera de color azul.',
        precio: 200
    },
    {
        type: 'remera',
        id:'11',
        imageUrl: 'remera-verde.jpg',
        Nombre: 'Remera verde',
        descripcion: 'Remera de color verde.',
        precio: 200
    },
]