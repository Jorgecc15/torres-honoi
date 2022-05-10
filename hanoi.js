let respuesta=""

function hanoi(discos,origen,destino) {
    if (discos==1) {
        respuesta=respuesta + origen + " -> " + destino + "&nbsp;"+ "&nbsp;"
    } else{
        if (destino==3&&origen==1) {
            nuevo_final=2
        }
        if (destino==3&&origen==2) {
            nuevo_final=1
        }
        if (destino==2&&origen==1) {
            nuevo_final=3
        }
        if (destino==2&&origen==3) {
            nuevo_final=1
        }
        if (destino==1&&origen==3) {
            nuevo_final=2
        }
        if (destino==1&&origen==2) {
            nuevo_final=3
        }
        hanoi(discos-1,origen,nuevo_final)
        respuesta= respuesta + origen + " -> " + destino + "&nbsp;"+ "&nbsp;"
        nuevo_origen = nuevo_final
        nuevo_final=final
        hanoi(discos-1, nuevo_origen, nuevo_final)
    }
}

do {
    discos=Number(prompt("¿Cuantos discos?"))    
} while (discos>10|| discos<1||isNaN(discos));
do {
    origen=Number(prompt("¿Cual es el orgien de los discos? (1, 2 o 3)"))    
} while (origen!=1 && origen!=2 && origen!=3 || isNaN(origen));
do {
    destino=Number(prompt("¿Cual es el destino de los discos? (1, 2 o 3)"))    
} while (destino!=1 && destino!=2 && destino!=3 || isNaN(destino));

if(destino==origen)
{
    console.log("Ya está resuelto")
    respuesta="Ya está resuelto"
}else{
hanoi(discos,origen,destino)
console.log(respuesta)
respuesta= "El resultado es " + respuesta
}
let contenedor = document.querySelector("#texto")
contenedor.innerHTML = respuesta
