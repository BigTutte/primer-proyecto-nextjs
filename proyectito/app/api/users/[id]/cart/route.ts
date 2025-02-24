/*
    Carrito para cada usuario:
El carrito aca obtenido va a depender del id del usuario, por eso el nombre de la carpeta madre '[id]'.
*/
import { NextRequest } from "next/server";
import { productos } from "@/app/detalles-del-producto";
import Carrito from "@/app/cart/page";


type Carrito = Record<string, string[]>; //tipo de dato que va a tener el carrito de los usuarios

const carts: Carrito = { //carritos de los usuarios. Para cada id de ususario, va a tener asociado un array con los productos que tiene en el carrito
    '1': ['1', '2'],
    '2': ['3', '4'],
    '3': ['5', '6'],
    '4': ['7', '8'],
    '5': ['9'],
}

type params = {
    id: string;
}

export async function GET(request: NextRequest, { params }: { params: params}) {
    const idUsuario = params.id; //tomo el id del usuario
    const carrito = carts[idUsuario]; //busco el carrito del usuario

    //primero verificamos que el carrito no este vacio
    if (carrito === undefined){
        return new Response(JSON.stringify([]), { //si esta vacio, retorno un array vacio
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    //mapeamos cada id de producto a su producto correspondiente
    const productosCarrito = carrito.map(id => productos.find(producto => producto.id === id)); //OBS: Exclamacion al final ya que no va a ser vacio
    return new Response(JSON.stringify(productosCarrito), { //retorno el carrito COMO STRING, aclarando el header para que se reconozca como JSON
        status: 200,
        headers: { //igual que antes asi se puede parsear como se espera
            'Content-Type': 'application/json'
        }
    });
}

type CuerpoCarrito = {
    id: string;
}

export async function POST(request: NextRequest, { params }: { params: params }) {
    const idUsuario = params.id;
    //debemos poder identificar que id de producto se quiere agregar al carrito
    const cuerpo: CuerpoCarrito = await request.json(); //obtenemos el body del request
    const idProducto = cuerpo.id; //obtenemos el id del producto a agregar

    carts[idUsuario] = carts[idUsuario]? carts[idUsuario].concat(idProducto) : [idUsuario]; //TERNARIA: Existe el tipo carts[idUsuario]? 
                                                                                            //Si es asi, concateno el idProducto, sino, creo un array con el idProducto
    const carritoUsuario = carts[idUsuario].map(id => productos.find(producto => producto.id === id)); //mapeo los ids a los productos correspondientes
    return new Response(JSON.stringify(carritoUsuario), {
        status: 201, //status creado
        headers: {
            'Content-Type': 'application/json'
        }
    }); //retorno el carrito actualizado

}

export async function DELETE(request: NextRequest, { params }: { params: params }) {
    const idUsuario = params.id;
    const cuerpo: CuerpoCarrito = await request.json();
    const idProducto = cuerpo.id;
    carts[idUsuario] = carts[idUsuario] ?  carts[idUsuario].filter(id => id !== idProducto) : []; //filtro el idProducto del carrito
    const carritoUsuario = carts[idUsuario].map(id => productos.find(producto => producto.id === id)); //mapeo los ids a los productos correspondientes
    return new Response(JSON.stringify(carritoUsuario), {
        status: 202, //eliminado
        headers: {
            'Content-Type': 'application/json'
        }
    }); //retorno el carrito actualizado
}