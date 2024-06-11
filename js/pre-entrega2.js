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
            costo_total = cantidad * this.costo_entrada
            console.log(`Compra añadida con exito. ${cantidad} butacas reservadas para ${this.nombre}. Costo total de la compra: ${costo_total}`)
        } else {
            console.log(`Compra fallida. No hay suficientes butacas disponibles para ${this.nombre}. Butacas disponibles: ${cantidad}`)
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


function seleccionPelicula(){
    peliculas.forEach((pelicula, indice) => {
        console.log(`${indice+1}: ${pelicula.nombre}, 
            Formato: ${pelicula.formato}, 
            Costo de entrada: ${pelicula.costo_entrada}`)
        })
    let elegir_pelicula = Number(prompt('Seleccionar pelicula:'))

    while ((isNaN(elegir_pelicula) || (elegir_pelicula < 1 || elegir_pelicula >= peliculas.length))) {
        alert('Selección no válida. Por favor, ingrese una opción válida.')
        elegir_pelicula = Number(prompt('Seleccione el tipo de película:'))
    }

    console.log(`Pelicula seleccionada: ${peliculas[elegir_pelicula].nombre}, 
        Formato: ${peliculas[elegir_pelicula].formato}, 
        Costo de entrada: ${peliculas[elegir_pelicula].costo_entrada}`)

    elegir_pelicula -= 1
    let cantidad_entradas = Number(prompt('¿Cuántas entradas desea comprar?'))

    while (isNaN(cantidad_entradas) || cantidad_entradas < 1) {
        alert('Cantidad no válida. Por favor, ingrese una cantidad válida.')
        cantidad_entradas = Number(prompt('¿Cuántas entradas desea comprar?'))
    }

    let costo_total = peliculas[elegir_pelicula].comprarEntrada(cantidad_entradas)
    return { pelicula: peliculas[elegir_pelicula], costo_total: costo_total, cantidad_entradas:cantidad_entradas }

}

let resultado_compra = seleccionPelicula()
console.log(`Pelicula seleccionada: ${resultado_compra.pelicula.nombre}
     Candidad de entradas: ${resultado_compra.cantidad_entradas}
     Costo total: ${resultado_compra.costo_total}`)