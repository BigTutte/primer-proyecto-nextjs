import { productos } from '@/app/detalles-del-producto'; //importar el array de productos. el @ es para que busque en la carpeta app
import NotFoundPage from '@/app/not-found';
import HeaderPage from '@/app/header/page';
import FooterPage from '@/app/footer/page';
export default function ProductDetail({ params }:  {params: {id: string}}) { //observar nombre de la carpeta, que va a ser el path de la pagina
    const producto = productos.find(pid => pid.id === params.id); //buscar el producto con el id que se pasa por parametro
    //si el producto no se encuentra (se devuelve id que no hay):
    if (!producto) {
        return <NotFoundPage/>
    }
    return (
        <>
        <div className="container mx-auto">
            <HeaderPage/>
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
                </div>
            </div>
            <FooterPage/>
        </div>
        </>
    )
}