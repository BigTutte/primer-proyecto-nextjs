import Link from "next/link"
export default function FooterPage() {
    return (
        <footer className="bg-gray-300 text-black p-4 mx-auto sm:px-6 sm:py-4 content-stretch text-center">
            <div className="container mx-auto flex flex-col md:flex-row justify-between ">
                <div className="w-1/3 mx-auto flex flex-col items-center p-2">
                    <h2 className="text-2xl font-bold ">Contacto</h2>
                    <p>Telefono: 123456789</p>
                    <p>Email:
                        <a className="text-italic hover:text-blue-700" href="mailto: hola@gmail.com"> holabuenastardes@gmail.com </a>
                    </p>
                </div>
                <div className="w-1/3 mx-auto flex flex-col items-center p-2">
                    <h2 className="text-2xl font-bold">Redes Sociales</h2>
                    <div className="flex flex-row">
                        <div className="flex justify-between p-2">
                            <Link href="https://www.facebook.com"> 
                                <img src="/facebook-logo.svg" alt="facebook" className="w-8 h-auto"></img>
                            </Link>
                        </div>
                        <div className="flex justify-between p-2">
                            <Link href="https://www.instagram.com"> 
                                <img src="/instagram-logo.svg" alt="facebook" className="w-8 h-auto"></img>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 mx-auto flex flex-col items-center p-2">
                    <h2 className="text-2xl font-bold">Ubicacion</h2>
                    <p>Av. Siempre Viva 123</p>
                    <p>Springfield</p>
                </div>
            </div>
        </footer>
    )
}