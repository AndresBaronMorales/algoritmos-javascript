import {divisionDosNumeros, multiplicacionDosNumeros, restaDosNumeros, sumaDosNumeros} from "./operacionesBasicas.js";


document.addEventListener("DOMContentLoaded",()=>{

    document.addEventListener("click",e=>{
        /* Suma */
        if(e.target.matches(".card--suma")){
            let numUno = parseFloat(prompt("Numero uno:"));
            let numDos = parseFloat(prompt("Numero Dos:"));
            alert(`La suma total es: ${sumaDosNumeros(numUno,numDos)}`)
        }

        /* Calculadora */
        if(e.target.matches(".card--calculadora")){
            alert("Seleccione la opcion: \n 1.Suma \n 2.Resta \n 3.multiplicación \n 4.División")
            let opcion = parseInt(prompt())
            
            if(opcion === 1){
                let numUno = parseFloat(prompt("Numero uno:"));
                let numDos = parseFloat(prompt("Numero Dos:"));
                alert(`La suma de ${numUno} + ${numDos} es: ${sumaDosNumeros(numUno,numDos)}`)
            }else if(opcion === 2){
                let numUno = parseFloat(prompt("Numero uno:"));
                let numDos = parseFloat(prompt("Numero Dos:"));
                alert(`La resta de ${numUno} - ${numDos} es: ${restaDosNumeros(numUno,numDos)}`)
            }else if(opcion === 3){
                let numUno = parseFloat(prompt("Numero uno:"));
                let numDos = parseFloat(prompt("Numero Dos:"));
                alert(`La multiplicacion de ${numUno} - ${numDos} es: ${multiplicacionDosNumeros(numUno,numDos)}`)
            }else if(opcion === 4){
                let numUno = parseFloat(prompt("Numero uno:"));
                let numDos = parseFloat(prompt("Numero Dos:"));
                alert(`La division de ${numUno} - ${numDos} es: ${divisionDosNumeros(numUno,numDos)}`)
            }else{
                alert("ERROR")
            }
        }

        /* Cuadrado */
        if(e.target.matches(".card--cuadrado")){
            let numUno = parseFloat(prompt("Numero:"));
            alert(`El cuadrado de ${numUno} es: ${multiplicacionDosNumeros(numUno,numUno)}`)
        }

        /* Area */
        if(e.target.matches(".card--area")){
            let numBase = parseFloat(prompt("Base:"));
            let numAltura = parseFloat(prompt("Altura:"));
            alert(`El área del triangulo con base ${numBase} y altura ${numAltura} es: ${(numBase * numAltura)/2} metros cuadrados`)
        }

        /* Banco */
        if(e.target.matches(".card--banco")){
            let capital = parseFloat(prompt("Capital:"));
            let anios = parseFloat(prompt("Años de prestamo:"));
            let ganancia = (((1.7 * 12) * anios) * capital) / 100;

            alert(`La ganancia de invertir $${capital} por ${anios} años es: ${ganancia} teniendo como capital final: $${capital + ganancia}`)
        }

        /* Notas */
        if(e.target.matches(".card--notas")){
            let promedio = 0;
            let estado = "Reprobado";
            for(let i = 0;i < 7;i++){
                let nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`))
                promedio += nota;
            }

            promedio = (promedio / 7).toFixed(2)

            if(promedio >= 6.2) estado = "Aprobado"

            alert(`El promedio final es: $${promedio} y su estado es: ${estado}`)
        }

        /* Mayor> */
        if(e.target.matches(".card--numeroMayor")){
            let numUno = parseFloat(prompt("Numero uno:"));
            let numDos = parseFloat(prompt("Numero Dos:"));
            if(numUno === numDos){
                alert(`${numUno} es igual que ${numDos}`)
            }else{
                (numUno > numDos)?alert(`${numUno} es mayor que ${numDos}`):alert(`${numDos} es mayor que ${numUno}`)
            }
        }

        /* Menor de tres< */
        if(e.target.matches(".card--numeroMenor")){
            let numeros = []
            for(let i = 0;i < 3;i++){
                let num = parseFloat(prompt(`Numero ${i + 1}:`));
                numeros.push(num);
            }
            numeros.sort((a,b) => a-b)

            alert(`El numero menor es: ${numeros[0]}`)
        }

        /* Pago< */
        if(e.target.matches(".card--pago")){
            let cantidad = parseInt(prompt("Cantidad de kilos vendidos"))
            let pago = cantidad * 4500;
            let descuento = 0
            let descuentoString = ""

            if(cantidad <= 2){
                descuento = 0
                descuentoString = "0%"
            }else if(cantidad <= 5){
                descuento = 0.1
                descuentoString = "10%"
            }else if(cantidad <= 8){
                descuento = 0.16
                descuentoString = "16%"
            }else{
                descuento = 0.2
                descuentoString = "20%"
            }
            
            alert(` El descuento es: ${descuentoString}. \n El valor total a pagar es ${pago - (pago * descuento)}`)
        }
    })
})
