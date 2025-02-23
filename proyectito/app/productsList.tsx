import Image from 'next/image'; //Para poder usar la etiqueta <Image> de Next.js, mas optimizada
import Link from 'next/link'; //es el que se usa en nextjs, para que sea single page.
import { Producto } from "./detalles-del-producto"; //para importar la interfaz Product

export default function ProductsList({ productos }: {productos: Producto[]}) { 
    //La funcion ProductsList va a tomar el array constante 'productos' (que se pasa a llamar productos dentro
    //de la funcion) para poder usarlo como arreglo de interfaces de tipo Producto.

    return ( //PARA LAS IMAGENES: deben de estar guardadas en carpeta public, y se accede a ellas con /nombre-de-la-imagen
        //OBS: Se debe de usar el atributo 'key' en el primer elemento del map, para que react pueda identificar
        <div className="container flex flex-col flex-row mx-auto justify-evenly bg-gray-100 p-12 sm:p-4 xs:p-2 text-center">
            <div className= "grid lg:grid-cols-3 sm:grid-cols-2 gap-10 justify-evenly">
                
                {productos.map(producto => (
                    <Link key={producto.id} href={'/products/' + producto.id}>
                            <div className="container p-3 bg-gray-200 rounded-lg object-fit hover:shadow-xl transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-102">
                                <Image className="rounded-lg h-auto w-full shadow-md" src={'/' + producto.imageUrl} alt={producto.Nombre} width={150} height={150} /> 
                                <h2 className='pt-3 text-xl font-bold '>{producto.Nombre}</h2>
                                <p className="text-xs">${producto.precio}</p>
                                <p>{producto.descripcion}</p>
                            </div> 
                    </Link>
                ))}
                
            </div>
        </div>
    )
}