import { productos } from '@/app/detalles-del-producto'; //importar el array de productos. el @ es para que busque en la carpeta app

export default function ProductDetail({ params }:  {params: {id: string}}) { //observar nombre de la carpeta, que va a ser el path de la pagina
    const producto = productos.find(pid => pid.id === params.id); //buscar el producto con el id que se pasa por parametro
    return <h1>{producto!.Nombre}</h1>
}