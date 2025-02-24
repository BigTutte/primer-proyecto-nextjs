import { productos } from "@/app/detalles-del-producto";

/*
IMPORTANTE: No se le puede pasar raw js ya que es una funcion asincrona que usa el HttpResponse generico (como con java).
Lo que vamos a hacer es pasarle un string, igual que en java.
*/

export async function GET(){
    return new Response(JSON.stringify(productos), {
        status: 200,
        headers: { //debemos decirle a la otra parte del servidor que le estamos mandando un json
            'Content-Type': 'application/json'
        }
    });

}