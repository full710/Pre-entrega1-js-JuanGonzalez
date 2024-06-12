document.getElementById("ejecutarBtn2").addEventListener("click", function() {
class Pelicula{
    constructor(nombre,formato,costo_entrada,butacas){
        this.nombre = nombre
        this.formato = formato
        this.costo_entrada = costo_entrada
        this.butacas = butacas
    }
    comprarEntrada(cantidad) {
        let costo_total
        if (this.butacas >= cantidad) {
            this.butacas -= cantidad
            if (confirm(`${cantidad} butacas reservadas para ${this.nombre}. Costo total de la compra: ${costo_total}
                Añadir al carrito?`)){
                console.log(`Compra añadida con exito`)
                costo_total = cantidad * this.costo_entrada
            }else{
                console.log(`Compra cancelada`)
                costo_total = null
            }
        } else {
            alert(`Compra fallida. No hay suficientes butacas disponibles para ${this.nombre}. Butacas disponibles: ${this.butacas}`)
        }
        return costo_total
    }
}

let peliculas = []
peliculas.push(new Pelicula('Harry Potter y el Prisionero de Azkaban', '2D', 3250,45))
peliculas.push(new Pelicula('Furiosa','2D',3250,45))
peliculas.push(new Pelicula('Tarot de la muerte','2D',3250,40))
peliculas.push(new Pelicula('Intensamente 2','3D',4100,40))
peliculas.push(new Pelicula('Kung Fu Panda 4','3D',4100,50))
peliculas.push(new Pelicula('Garfield: Fuera de casa', '3D',4100,35))


const seleccionPelicula = () => {
    peliculas.forEach((pelicula, indice) => {
        console.log(`${indice + 1}: ${pelicula.nombre}, 
            Formato: ${pelicula.formato}, 
            Costo de entrada: ${pelicula.costo_entrada}`)
    })
    let elegir_pelicula = Number(prompt('Seleccionar pelicula:'))
    while (isNaN(elegir_pelicula) || (elegir_pelicula < 1 || elegir_pelicula > peliculas.length)) {
        alert('Selección no válida. Por favor, ingrese una opción válida.')
        elegir_pelicula = Number(prompt('Seleccionar pelicula:'))
    }

    console.log(`Pelicula seleccionada: ${peliculas[elegir_pelicula - 1].nombre}, 
        Formato: ${peliculas[elegir_pelicula - 1].formato}, 
        Costo de entrada: ${peliculas[elegir_pelicula - 1].costo_entrada}
        Butacas disponibles: ${peliculas[elegir_pelicula - 1].butacas}`)

    elegir_pelicula -= 1
    let cantidad_entradas = Number(prompt('¿Cuántas entradas desea comprar?'))

    while (isNaN(cantidad_entradas) || cantidad_entradas < 1) {
        alert('Cantidad no válida. Por favor, ingrese una cantidad válida.')
        cantidad_entradas = Number(prompt('¿Cuántas entradas desea comprar?'))
    }
    
    let costo_total = peliculas[elegir_pelicula].comprarEntrada(cantidad_entradas)
    return { pelicula: peliculas[elegir_pelicula], costo_total: costo_total, cantidad_entradas: cantidad_entradas }
}


const aplicarDescuento = (resultado_compra) => {
    console.log('Aplicar descuento')
    let costo_total_descuento
    
    if (resultado_compra.costo_total > 10000) {
        costo_total_descuento = resultado_compra.costo_total * 0.8
        alert(`Precio final con descuento ${costo_total_descuento}`)
    } else {
        costo_total_descuento = resultado_compra.costo_total
        alert(`No se aplica descuento, costo final ${costo_total_descuento}`)
    }

    return { costo_total_descuento }
}

const finalizarCompra = (resultado_compra, costo_descuento) =>{
    alert(`Resumen de la compra:
        Pelicula seleccionada: ${resultado_compra.pelicula.nombre}
        Formato: ${resultado_compra.pelicula.formato}
        Costo entrada: ${resultado_compra.pelicula.costo_entrada}
        Cantidad de entradas:${resultado_compra.cantidad_entradas}
        Costo total:${resultado_compra.costo_total}
        Descuento aplicado:${costo_descuento.costo_total_descuento}`)
    if (confirm(`Desea confirmar la compra?`)){
        alert(`Compra realizada con exito`)
        if (confirm('Desea realizar otra compra?')){
            return reiniciar = true
        }else {
            alert('Que disfrute de su pelicula!!')
            finalizar = false
            return reiniciar = false
        }
    }else{
        alert(`Compra no realizada`)
        finalizar = true
    }
}

let resultado_compra = null
let costo_descuento = null
let reiniciar
let finalizar = true


while (finalizar){
    console.log(`    1- Seleccionar pelicula
    2- Aplicar descuento
    3- Finalizar compra
    4- Cancelar compra`);

    let menu_select = Number(prompt('Seleccionar menú: '))
    switch (menu_select) {
        case 1:
            resultado_compra = seleccionPelicula()
            break
        case 2:
            if (resultado_compra && resultado_compra.costo_total !== null){
                costo_descuento = aplicarDescuento(resultado_compra)
            } else {
                alert('No hay compras añadidas. Elija una pelicula y la cantidad de entradas para poder realizar el descuento correspondiente')
            }
            break
        case 3:
            if (resultado_compra && costo_descuento) {
                finalizarCompra(resultado_compra, costo_descuento)
                if(reiniciar = true){
                    resultado_compra = null
                    costo_descuento = null
                }else{
                finalizar = false
                }
            } else {
                alert('Debe completar todas las etapas antes de finalizar la compra.')
            }
            break;
        case 4:
            console.log('Compra cancelada.')
            finalizar = false
            break
        default:
            alert('Selección no válida. Por favor, ingrese un número entre 1 y 4.')
            break
    }
}


})