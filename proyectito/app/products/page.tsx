// Componente de la página de productos
// //SE EXPORTAN COMO DEFAULT PARA QUE NEXT SEPA QUE ESA ES LA 
//COMPONENTE QUE SE VA A USAR PARA LA PAGINA
import Link from 'next/link'; //es el que se usa en nextjs, para que sea single page.
import ProductsList from "../productsList";
import { productos } from "../detalles-del-producto";

export default function ProductsPage() {
    return ( //IMPORTANTE: Se debe retornar un solo elemento, por eso se usa el fragmento de react
        <> 
            <div className="container items-center flex flex-col mx-auto ">
                <div className="container items-center object-center ">
                    <span className="container flex flex-col flex-row mx-auto items-center p-3" >
                        <h3 className="text-xs text-gray-500 antialiased font-mono">Bienvenido a la tienda</h3>
                        <h1 className="text-3xl antialiased font-bold">[Productos]</h1>
                    </span>
                </div>
                
                <div className="container flex p-2">
                    <ProductsList productos={productos} />
                </div>
            </div>
        </>
    );
}
