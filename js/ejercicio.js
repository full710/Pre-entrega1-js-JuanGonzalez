// console.log('Bucle For')

// for (let iterar = 0; iterar < 10; iterar ++){
//     console.log('La variable vale' + iterar);
    
// }

// console.log('Ejercicio multiplicacion')

// let numero = Number(prompt('Ingrese un numero'))

// for (let i = 1; i<=10; i++){
//     resultado = numero * i;
//     console.log( numero + '*' + i + '=' + resultado);
// }

// console.log('Ejercicio adivina el numero (Uso Break)');

// for (let j = 1; j <=5; j++){

//     numero = Number(prompt('Ingresa un numero'))

//     if (numero == 5){
//         console.log('Adivinaste el numero')
//         break
//     }
//     console.log('Intenta con otro numero');
// }


// console.log('El test matematico');
// const pregunta = 5
// let respuestas_correctas = 0
// let respuestas_incorrectas = 0
// let racha_negativa = 0


// for(let i=1; i <= pregunta; i++){
//     let numero_random = Math.round(Math.random()*10)
//     let resultado_correcto = numero_random * i
//     let respuesta_usuario = prompt('Cuanto es ' + i + ' X ' + numero_random + ' ?')

//     if(respuesta_usuario == 'DonPepe'){
//         respuestas_correctas++
//     } else if(resultado_correcto == respuesta_usuario){
//         console.log('Respuesta correcta')
//         respuestas_correctas++
//         racha_negativa = 0
//     } else{
//         console.log('Respuesta incorrecta')
//         respuestas_incorrectas++
//         racha_negativa ++
//         if(racha_negativa == 2){
//             console.log('Haber estudiado');
//             break
//         }
//     }
// }

// console.log('Respuestas correctas totales: ' + respuestas_correctas);
// console.log('Respuestas incorrectas totales: ' + respuestas_incorrectas);


// console.log('Bucle While');

// let condicion = true

// while (condicion){
//     let perro = Number(prompt('Ingrese 0 si el perro esta satisfecho'))

//     if (perro == 0){
//         // condicion = false
//         console.log('Volve a casa');
//         break
//     }
// }

console.log('Bucle Do while');

let edad

do {
    edad = Number(prompt('Ingrese su edad'))
    if (edad < 18){
        console.log('Menor de edad');
    }
} while (edad < 18)

console.log('Mayor de edad');