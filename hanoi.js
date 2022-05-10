
let respuesta=""

function hanoi(discos,origen,final) {
    if (discos==1) {
        respuesta=respuesta + origen + " -> " + final + "&nbsp;"+ "&nbsp;"
    } else{
        if (final==3&&origen==1) {
            nuevo_final=2
        }
        if (final==3&&origen==2) {
            nuevo_final=1
        }
        if (final==2&&origen==1) {
            nuevo_final=3
        }
        if (final==2&&origen==3) {
            nuevo_final=1
        }
        if (final==1&&origen==3) {
            nuevo_final=2
        }
        if (final==1&&origen==2) {
            nuevo_final=3
        }
        hanoi(discos-1,origen,nuevo_final)
        respuesta= respuesta + origen + " -> " + final + "&nbsp;"+ "&nbsp;"
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
    final=Number(prompt("¿Cual es el destino de los discos? (1, 2 o 3)"))    
} while (final!=1 && final!=2 && final!=3 || isNaN(final));

if(final==origen)
{
    console.log("Ya está resuelto")
    respuesta="Ya está resuelto"
}else{
hanoi(discos,origen,final)
console.log(respuesta)
respuesta= "El resultado es " + respuesta
}
let contenedor = document.querySelector("#texto")
contenedor.innerHTML = respuesta
