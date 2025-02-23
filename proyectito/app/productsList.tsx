import Image from 'next/image'; //Para poder usar la etiqueta <Image> de Next.js, mas optimizada
import Link from 'next/link'; //es el que se usa en nextjs, para que sea single page.
import { Producto } from "./detalles-del-producto"; //para importar la interfaz Product

export default function ProductsList({ productos }: {productos: Producto[]}) { 
    //La funcion ProductsList va a tomar el array constante 'productos' (que se pasa a llamar productos dentro
    //de la funcion) para poder usarlo como arreglo de interfaces de tipo Producto.

    return ( //PARA LAS IMAGENES: deben de estar guardadas en carpeta public, y se accede a ellas con /nombre-de-la-imagen
        //OBS: Se debe de usar el atributo 'key' en el primer elemento del map, para que react pueda identificar
        <>
            <div className="container bg-gray-100 sm:p-4 xs:p-2 text-fit content-center mx-auto">
                <div className= "grid lg:grid-cols-3 sm:grid-cols-2 gap-4 ">
                    
                    {productos.map(producto => (
                        <Link key={producto.id} href={'/products/' + producto.id}>
                                <div className="container p-3 bg-gray-200 rounded-lg overflow-hidden object-fit hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-102 hover:bg-[#F5F5F5]">
                                    <div className="flex flex-col">
                                        <Image className="rounded-lg w-full h-40 object-cover hover:animate-fadeIn" src={'/' + producto.imageUrl} alt={producto.Nombre} width={150} height={150} /> 
                                    </div>
                                    <div className="flex-1 p-5">
                                        <h2 className='pt-3 text-xl font-bold '>{producto.Nombre}</h2>
                                        <p className="text-xs">${producto.precio}</p>
                                    </div>
                                </div> 
                        </Link>
                    ))}
                    
                </div>
            </div>
        </>
    )
}