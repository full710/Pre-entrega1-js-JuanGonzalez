document.getElementById("ejecutarBtn1").addEventListener("click", function() {

function comprarEntradas() {
    console.log('Opción 1: Comprar tickets para películas')
    console.log('Opción 1: 2D (valor $3500)')
    console.log('Opción 2: 3D (valor $4500)')

    let pelicula_selec = Number(prompt('Seleccione el tipo de película (1 o 2):'))
    while (isNaN(pelicula_selec) || (pelicula_selec !== 1 && pelicula_selec !== 2)) {
        alert('Selección no válida. Por favor, ingrese una opción válida (1 o 2).')
        pelicula_selec = Number(prompt('Seleccione el tipo de película (1 o 2):'))
    }

    let valor_entrada

    if (pelicula_selec == 1){
    valor_entrada = 3500
    } 
    if (pelicula_selec == 2){
    valor_entrada = 4500
    }

    let cantidad_entradas = Number(prompt('Ingrese la cantidad de entradas que necesita (Hasta 10 entradas por compra):'))
    while (isNaN(cantidad_entradas) || cantidad_entradas <= 0 || cantidad_entradas >= 10) {
        alert('Ingrese una cantidad válida (de 1 a 9).')
        cantidad_entradas = Number(prompt('Ingrese la cantidad de entradas que necesita (Hasta 10 entradas por compra):'))
    }
    
    console.log(`Ha seleccionado ${cantidad_entradas} entradas para la película ${pelicula_selec === 1 ? '2D' : '3D'}.`)
    return { valor_entrada: valor_entrada, cantidad_entradas: cantidad_entradas }
}

function costoTotal(entradas){
    console.log('Opción 2: Costo total compra seleccionada')
    let costo_total = entradas.valor_entrada * entradas.cantidad_entradas
    console.log('El costo total de la compra es:', costo_total)
    return {costo_total : costo_total}
}

function aplicarDescuento(total){
    console.log('Opción 3: Aplicar descuento seleccionada')
    let costo_total_descuento
    if (total.costo_total > 10000){
        costo_total_descuento = total.costo_total - (total.costo_total * 0.2)
        console.log('Precio final', costo_total_descuento)
        return { costo_total_descuento:costo_total_descuento}
    } else {
        costo_total_descuento = total.costo_total
        console.log('No se aplica descuento, costo final', costo_total_descuento)
        return { costo_total_descuento:costo_total_descuento}
    }
}

function finalizarCompra(entradas,total,total_descuento){
    console.log('Opción 4: Finalizar compra seleccionada')
    console.log('Resumen de la compra:')
    console.log('Cantidad de entradas:', entradas.cantidad_entradas)
    console.log('Valor por entrada:', entradas.valor_entrada)
    console.log('Valor total de la compra:', total.costo_total)
    console.log('Valor final con descuentos:', total_descuento.costo_total_descuento)
}

let entradas, total, total_descuento
let finalizar = false
let cancelar = false

do {
    console.log('1- Comprar tickets para películas')
    console.log('2- Costo total compra')
    console.log('3- Aplicar descuento')
    console.log('4- Finalizar compra')
    console.log('5- Cancelar compra')

    let menu_select = Number(prompt('Seleccionar menú: '))
    while ((isNaN(menu_select) || (menu_select < 1 || menu_select > 5))) {
        alert('Selección no válida. Por favor, ingrese un número entre 1 y 5.')
        menu_select = Number(prompt('Seleccionar menú'))
    }

    switch (menu_select) {
        case 1:
            entradas = comprarEntradas()
            break
        case 2:
            if (entradas) {
                total = costoTotal(entradas)
            } else {
                alert('Debe comprar entradas primero antes de calcular el costo total.')
            }
            break
        case 3:
            if (total) {
                total_descuento = aplicarDescuento(total)
            } else {
                alert('Debe calcular el costo total primero antes de aplicar el descuento.')
            }
            break
        case 4:
            if (entradas && total && total_descuento) {
                finalizarCompra(entradas, total, total_descuento)
                finalizar = true
            } else {
                alert('Debe completar todas las etapas antes de finalizar la compra.')
            }
            break;
        case 5:
            console.log('Compra cancelada.')
            cancelar = true
            break
    }
} while (!finalizar && !cancelar);
})