
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
//La funcion HeaderPage es la que se va a encargar de mostrar el header de la pagina, con el logo y la barra de busqueda.
//La barra de busqueda es de aca: https://www.material-tailwind.com/docs/html/input-search
//y el logo es un svg que se encuentra en la carpeta public
//Este tsx se importa en el layout.tsx para que se muestre en todas las paginas

export default function HeaderPage() {
    return (
        <>
        <nav className="container mx-auto p-4 flex md:flex-row flex-col justify-between items-center shadow-md ">
            
        <div className="container mx-auto px-4 py-3 flex justify-between justify-items-end">
                <ul className="flex space-x-4 justify-self-end">
                    <li>
                        <Link href="/products"className="text-slate-800 hover:text-slate-700">
                            Productos
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart"className="text-slate-800 hover:text-slate-700">
                            carrito
                        </Link>
                    </li>
                    <li>
                        <Link href="/checkout"className="text-slate-800 hover:text-slate-700">
                            Checkout
                        </Link>
                    </li>
                </ul>
            </div>
            <Link href="/products">
                <Image src="/mountain.svg" alt="logo" width={130} height={130} className=" antialiased"></Image>
            </Link>
            <div className="container flex md:flex-row flex-col mx-auto justify-center items-center p-4 shadow-mid">
            
                <div className="w-full max-w-2xl min-w-[200px]">
                    <div className="relative">
                        <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Productos, tipos, ..." 
                        />
                        <button
                        className="absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>
                    
                        Buscar
                        </button> 
                    </div>
                </div>
            </div>
            
        </nav>
        </>
    )
}