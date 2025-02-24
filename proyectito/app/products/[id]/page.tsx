import { productos } from '@/app/detalles-del-producto'; //importar el array de productos. el @ es para que busque en la carpeta app
import NotFoundPage from '@/app/not-found';
import ProductsList from '@/app/productsList';
export default function ProductDetail({ params }:  {params: {id: string}}) { //observar nombre de la carpeta, que va a ser el path de la pagina
    const producto = productos.find(pid => pid.id === params.id); //buscar el producto con el id que se pasa por parametro
    //si el producto no se encuentra (se devuelve id que no hay):
    if (!producto) {
        return <NotFoundPage/>
    }
    return (
        <>
        <div className="container mx-auto">
            <div className="container mx-auto p-8 flex flex-col md:flex-row shadow-mid overflow-hidden content-evenly items-stretch">
                <div className="md:w-1/3 mb-4 md:mb-0 md:mr-8 flex flex-col rounded-xl">
                    <img src={'/' + producto.imageUrl} alt="imagen del producto" 
                    className=" rounded-xl shadow-mid w-full h-96 "></img>
                </div>
                <div className="md:w-2/3 flex-1 content-evenly">
                    <p className='text-md font-mono'> [Type] = {producto.type}</p>
                    <h1 className="text-4xl font-bold pb-3 pt-3">{producto!.Nombre}</h1>
                    <h2 className='text-xl font-semibold pb-2'>Descripcion:</h2>
                    <article className="container  mx-auto p-2 bg-gray-100 shadow-mid text-balance text-elipsis">
                        <p className="font-mono object-contain">{producto.descripcion}</p>
                    </article>
                    <div className="flex flex-row justify-between items-center pt-3">
                    <button data-ripple-light="true" className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button">
                        Agregar al carrito
                    </button>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-8 flex flex-col md:flex-row shadow-mid overflow-hidden content-evenly items-stretch text-center">
                <h1 className="text-4xl font-mono font-bold pb-3 pt-3">Articulos relacionados</h1>
                <ProductsList productos={productos.filter(p => p.type === producto.type)}/>
            </div>
        </div>
        </>
    )
}