// Componente de la página de productos
// //SE EXPORTAN COMO DEFAULT PARA QUE NEXT SEPA QUE ESA ES LA 
//COMPONENTE QUE SE VA A USAR PARA LA PAGINA

import ProductsList from "../productsList";
import { productos } from "../detalles-del-producto";

export default function ProductsPage() {
    return ( //IMPORTANTE: Se debe retornar un solo elemento, por eso se usa el fragmento de react
        <> 
            <h1>Productos</h1>
            <ProductsList productos={productos} />
        </>
    );
}
