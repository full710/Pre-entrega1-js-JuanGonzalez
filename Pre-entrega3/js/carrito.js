const datosCompra = JSON.parse(sessionStorage.getItem('datosCompra'))
let peliculas = JSON.parse(localStorage.getItem('peliculas'))

const resumenCompra = (datosCompra) => {
    const ul = document.getElementById('resumen-compra')

    const peliculaSeleccionada = document.createElement('li')
    peliculaSeleccionada.className = 'pelicula-seleccionada'
    peliculaSeleccionada.textContent = `Película: ${datosCompra.nombre}`

    const butacasSeleccionadas = document.createElement('li')
    butacasSeleccionadas.className = 'butacas-seleccionadas'
    butacasSeleccionadas.textContent = `Butacas seleccionadas n°: ${datosCompra.butacas.join(', ')}`

    const tipoDeEntrada = document.createElement('li')
    tipoDeEntrada.className = 'tipo-de-entrada'
    tipoDeEntrada.textContent = `Formato: ${datosCompra.formato} - Costo por unidad: ${datosCompra.precio}`

    const costoTotal = document.createElement('li')
    costoTotal.className = 'costo-total'
    costoTotal.textContent = `Cantidad de butacas: ${datosCompra.cantidadButacas} - Costo total: ${datosCompra.costoTotal}`

    const confirmarCompra = document.createElement('button')
    confirmarCompra.textContent = 'Confirmar compra'
    confirmarCompra.className = 'boton-seleccionar'
    confirmarCompra.type = 'button'
    confirmarCompra.addEventListener('click', () => {
        let pelicula = peliculas.find(p => p.nombre === datosCompra.nombre)
        pelicula.butacasOcupadas = pelicula.butacasOcupadas.concat(datosCompra.butacas)
        localStorage.setItem('peliculas', JSON.stringify(peliculas))
        sessionStorage.removeItem('datosCompra')
        window.location.href = './inicio.html'
        alert(`            COMPRA REALIZADA CON EXITO!!
        PELICULA ${datosCompra.nombre}
        BUTACAS SELECCIONADAS: ${datosCompra.butacas}
        COSTO TOTAL: ${datosCompra.costoTotal}`)
    })

    const cancelarCompra = document.createElement('button')
    cancelarCompra.textContent = 'Cancelar'
    cancelarCompra.className = 'boton-cancelar'
    cancelarCompra.type = 'button'
    cancelarCompra.addEventListener('click',() =>{
        let butacasOcupadas = []
        localStorage.setItem('butacasOcupadas', JSON.stringify(butacasOcupadas))
        window.location.href = './inicio.html'
        alert(`COMPRA CANCELADA
            Las butacas seleccionadas ya no se encuentran en el carrito y pasaron a estar disponibles`)
    } )

    ul.appendChild(butacasSeleccionadas)
    ul.appendChild(peliculaSeleccionada)
    ul.appendChild(tipoDeEntrada)
    ul.appendChild(costoTotal)
    ul.appendChild(confirmarCompra)
    ul.appendChild(cancelarCompra)
}

resumenCompra(datosCompra)


