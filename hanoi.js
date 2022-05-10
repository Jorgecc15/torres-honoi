
let respuesta=""
let n
let origen
let destino
do {
    n=Number(prompt("¿Cuantos discos?"))    
} while (n>10|| n<1||isNaN(n));
do {
    origen=Number(prompt("¿Cual es el orgien de los discos? (1, 2 o 3)"))    
} while (origen!=1 && origen!=2 && origen!=3 || isNaN(origen));
do {
    destino=Number(prompt("¿Cual es el destino de los discos? (1, 2 o 3)"))    
} while (destino!=1 && destino!=2 && destino!=3 || isNaN(destino));

function hanoi(n,origen, destino){
    if(n==1){
        respuesta=respuesta + origen + " -> " + destino + "&nbsp;"+ "&nbsp;"
    }else{
    if(origen==1 && destino==2){
        nuevo_final=3
    }
    if (origen==1&&destino==3) {
        nuevo_final=2
    }
    if (origen==2&&destino==3) {
        nuevo_final=1
    }
    if (origen==2&&destino==1) {
        nuevo_final=3
    }
    if (origen==3&&destino==2) {
        nuevo_final=1
    }
    if (origen==3&&destino==1) {
        nuevo_final=2
    }
    hanoi(n-1,origen,nuevo_final)
        respuesta= respuesta + origen + " -> " + destino + "&nbsp;"+ "&nbsp;"
        nuevo_origen = nuevo_final
        nuevo_final=destino
        hanoi(n-1, nuevo_origen, nuevo_final)
    }
}
if(destino==origen)
{
    console.log("Ya está resuelto")
    respuesta="Ya está resuelto"
}else{
hanoi(n,origen,destino)
console.log(respuesta)
respuesta= "El resultado es " + respuesta
}
let contenedor = document.querySelector("#contenedor")
contenedor.innerHTML = respuesta
