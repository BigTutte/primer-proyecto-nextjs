import Image from 'next/image'; //Para poder usar la etiqueta <Image> de Next.js, mas optimizada
import Link from 'next/link'; //es el que se usa en nextjs, para que sea single page.
import { Producto } from "./detalles-del-producto"; //para importar la interfaz Product

export default function ProductsList({ productos }: {productos: Producto[]}) { 
    //La funcion ProductsList va a tomar el array constante 'productos' (que se pasa a llamar productos dentro
    //de la funcion) para poder usarlo como arreglo de interfaces de tipo Producto.

    return ( //PARA LAS IMAGENES: deben de estar guardadas en carpeta public, y se accede a ellas con /nombre-de-la-imagen
        //OBS: Se debe de usar el atributo 'key' en el primer elemento del map, para que react pueda identificar
        <div>
            {productos.map(producto => ( //OBS: Se repite como en PHP, la mezcla de sintaxis de html y de ts
                
                <Link key={producto.id} href={'/products/' + producto.id}>
                    <h2>{producto.Nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>El precio es: ${producto.precio}</p>
                    <Image src={'/' + producto.imageUrl} alt={producto.Nombre} width={150} height={150} /> 
                </Link>
            ))} 
        </div>
    )
}