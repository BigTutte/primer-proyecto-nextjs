import { NextRequest } from "next/server";
import { productos } from "@/app/detalles-del-producto";
type params = {
    id: string;
}

export async function GET(request: NextRequest, { params }: { params: params }){ //params va a tener solo el id del producto
    const productId = params.id; //tomo el id
    const product = productos.find(product => product.id === productId); //busco el producto segun su id

    if (!product) {
        return new Response('Producto no encontrado.', { //si no lo encuentro, retorno un mensaje de error
            status: 404,
        });
    }
    return new Response(JSON.stringify(product), { //retorno el producto COMO STRING, aclarando el header para que se reconozca como JSON
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}