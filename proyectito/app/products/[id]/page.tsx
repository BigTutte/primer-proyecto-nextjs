import { productos } from '@/app/detalles-del-producto'; //importar el array de productos. el @ es para que busque en la carpeta app
import NotFoundPage from '@/app/not-found';
export default function ProductDetail({ params }:  {params: {id: string}}) { //observar nombre de la carpeta, que va a ser el path de la pagina
    const producto = productos.find(pid => pid.id === params.id); //buscar el producto con el id que se pasa por parametro
    //si el producto no se encuentra (se devuelve id que no hay):
    if (!producto) {
        return <NotFoundPage/>
    }
    return (
        <>
        <div className="container mx-auto p-8 flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
                <img src={'/' + producto.imageUrl} alt="imagen del producto" 
                className="w-full h-auto rounded-lg shadow-mid"></img>
            </div>
            <div className="md:w-1/2">
                <h1 className="text-4xl font-bold">{producto!.Nombre}</h1>
                <p className='text-2xl text-gray-300 mt-2'> Precio: {producto.precio} pesitos.</p>
                <h2 className='text-2xl font-semibold mt-2'>Descripcion:</h2>
                <h3 className="text-gray-400">{producto.descripcion}</h3>
            </div>
        </div>
        </>
    )
}