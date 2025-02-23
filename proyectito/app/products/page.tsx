// Componente de la página de productos
// //SE EXPORTAN COMO DEFAULT PARA QUE NEXT SEPA QUE ESA ES LA 
//COMPONENTE QUE SE VA A USAR PARA LA PAGINA
import Link from 'next/link'; //es el que se usa en nextjs, para que sea single page.

import ProductsList from "../productsList";
import { productos } from "../detalles-del-producto";

export default function ProductsPage() {
    return ( //IMPORTANTE: Se debe retornar un solo elemento, por eso se usa el fragmento de react
        <> 
            <Link href="/products">
            <span className="container flex flex-col flex-row mx-auto items-center p-3" >
                <img src="/mountain.svg" alt="logo" className=" antialiased w-24 h-auto"></img>
                <h3 className="text-xs text-gray-500 antialiased font-mono">Bienvenido a la tienda</h3>
                <h1 className="text-4xl antialiased font-bold">[Productos]</h1>
            </span>
            </Link>
            <div className="container mx-auto">
                <ProductsList productos={productos} />
            </div>
        </>
    );
}
