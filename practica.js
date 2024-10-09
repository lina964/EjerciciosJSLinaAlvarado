
// Taller de Lógica y Algoritmos
// 1. 

// function suma(n) {
//     let suma = 0;
//     for (let i = 1; i <= n; i++){
//         suma = suma + i
//     } 
//     console.log ( `La suma de los numeros de 1 a ${n} es: ${suma}`)
//     return suma
// }
// suma(prompt("Introduce un número n: "))

// 2. 

// function parOimpar (n) {
//     if(n % 2 === 0){
//         console.log (`El numero ${n} es par`)
//     } else {
//         console.log (`El numero ${n} es impar`)
//     }
// } 
// parOimpar(prompt("Insegre un numero"))

// 3. 

// function generica (edad,sexo) {
//     if(edad <=10 && sexo==="F"){
//         console.log("Recibe un jugo y una porcion de pizza Hawaiana")
//     } else if (edad > 18 && sexo==="F"){
//         console.log ("Recibe una cerveza y una porcion de pizza Hawaiana")
//     } else if (edad <=10 && sexo==="M") {
//         console.log ("Recibe un jugo y una porcion de pizza de tres carnes")
//     } else if (edad > 18 && sexo==="M") {
//         console.log ("Recibe una cerveza y una porcion de pizza de tres canes")
//     } else {
//         console.log ("Usted no recibe ningun premio")
//     }
// }

// generica (prompt ("Ingrese su edad"), prompt("Ingrese su sexo (M/F)"))



// 4.

  
// function cobrar(){
//     let suma = 0
//     let respuesta = ""
//     const menu = {
//         hamburguesa: 11000,
//         gaseosa: 5000,
//         papas: 4000,
//     } 
//     while (respuesta!=="pagar"){
//         respuesta = prompt(`hamburguesa: 11000 \ngaseosa: 5000\npapas: 4000`)
//         if(respuesta!==""   && respuesta !=="pagar"){
//             suma = suma + menu[respuesta]
//         }        
//     } 
//     console.log (`El total de su compra es ${suma}, gracias!`)
// }
// cobrar()

5. 
// function multiplicar (numero, limite) {
//  for (let i=1; i<=limite; i++) {
//     console.log (`${numero} x ${i}= ${numero * i}`)
//  }
// }
// multiplicar(prompt ("Dime un numero"), prompt("Elige un limite"))



// 6.

// function matricula (promedio) {
//     if (promedio < 3) {
//         console.log ("No tiene ningun descuento")
//     } else if ( promedio === 3 || promedio <= 4) {
//         console.log (`El valor de su matricula despues del descuento es ${1000000 - ((1000000 * 5)/100)}`)
//     } else {
//         console.log (`El valor de su matricula despues del descuento es ${(1000000 * 0.5)} `)
//     }
// }

// matricula(prompt ("Ingrese su promedio") )