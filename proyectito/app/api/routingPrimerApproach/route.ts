/*
    FUNCIONALIDAD DE ROUTING: 
Incluido en el framewotrk de Next.js, el routing se realiza de manera automatica. Se debe crear un archivo en la carpeta pages con el nombre de la ruta que se quiere crear.
Por ejemplo, si se quiere crear una ruta /hello, se debe crear un archivo llamado hello.tsx en la carpeta pages.
En el archivo hello.tsx se debe exportar un componente que se va a mostrar en la ruta /hello.
Por ejemplo, si se quiere mostrar un h1 con el texto "Hello, World!" en la ruta /hello, se debe escribir el siguiente codigo en el archivo hello.tsx:
*/
export async function GET(){
    return new Response('Hello, World!', {
        status: 200,
    }); //asi se crean los HttpResponse
}
/*
Y para llegar a este routing luego de la direccion de la pagina, se debe escribir /hello.
*/

export async function POST(){
    return new Response('Tas usando POST', {
        status: 200,
    });
}