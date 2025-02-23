'use client';   //puede reducir rendimiento de algunos componentes, importante para usar useState aca
                //ya que es una componente server side y estamos en el cliente
import { useState } from 'react';
import { productos } from '../detalles-del-producto';
import Link from 'next/link';

export default function Carrito() {
    const [carrito, setCarrito] = useState(['1', '2']);
    const productosCarrito = carrito.map (id => productos.find(pid => pid.id === id)!); //el signo de exclamacion es para decirle a typescript que no va a ser null
    return (
        <>
            <h1>Carrito</h1>
            {productosCarrito.map(producto => (
                <Link key={producto.id} href={'/products/' + producto.id}>
                    <h2>{producto.Nombre}</h2>
                    <p>{producto.descripcion}</p>
                    <p>El precio es: ${producto.precio}</p>
                </Link>
            ))    
            }
        </>
    )
}