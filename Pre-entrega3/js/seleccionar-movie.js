
    const peliculaSeleccionada = JSON.parse(sessionStorage.getItem('peliculaSeleccionada'))
    let peliculas = JSON.parse(localStorage.getItem('peliculas'))
    const pelicula = peliculas.find(p => p.nombre === peliculaSeleccionada.nombre)

    const seleccionarPelicula = (pelicula) => {
        const body = document.querySelector('body')
        const contenedorCine = document.createElement('div')
        contenedorCine.className = 'contenedor-cine'

        const pantalla = document.createElement('div')
        pantalla.className = 'pantalla'
        pantalla.textContent = `Pantalla ${pelicula.nombre}`

        const cine = document.createElement('div')
        cine.className = 'cine'

        const carrito = document.createElement('div')
        carrito.className = 'carrito'

        const h2 = document.createElement('h2')
        h2.textContent = 'Butacas seleccionadas'
        const ul = document.createElement('ul')
        carrito.appendChild(h2)
        carrito.appendChild(ul)
        contenedorCine.appendChild(pantalla)
        contenedorCine.appendChild(cine)
        contenedorCine.appendChild(carrito)
        body.appendChild(contenedorCine)

        const confirmarButacas = document.createElement('button')
        confirmarButacas.className = 'boton-seleccionar'
        confirmarButacas.textContent = 'Continuar'
        confirmarButacas.style.display = 'none'
        confirmarButacas.addEventListener('click', () => {
            sessionStorage.setItem('datosCompra', JSON.stringify(datosCompra))
            window.location.href = './carrito.html'
        })

        carrito.appendChild(confirmarButacas)
        const carritoVacio = document.createElement('p')
        carritoVacio.textContent = 'No has seleccionado ninguna butaca'
        carrito.appendChild(carritoVacio)

        const filas = 10
        let numeroButaca = 1

        const datosCompra = {
            butacas: [],
            cantidadButacas: 0,
            costoTotal: 0,
            nombre: pelicula.nombre,
            precio: pelicula.costo_entrada,
            formato: pelicula.formato,
            afiche: pelicula.afiche
        }

        const crearGrupoButacas = (cantidad, numeroInicial, butacasOcupadas) => {
            const grupoButacas = document.createElement('div')
            grupoButacas.className = 'grupo-butacas'

            for (let i = 0; i < cantidad; i++) {
                const butaca = document.createElement('div')
                butaca.className = 'butaca'
                butaca.dataset.numero = numeroInicial + i
                butaca.textContent = butaca.dataset.numero
                butaca.addEventListener('click', () => seleccionarButaca(butaca))
                grupoButacas.appendChild(butaca)

                butacasOcupadas.includes(parseInt(butaca.dataset.numero)) && butaca.classList.add('ocupada')
            }
            return grupoButacas
        }

        const crearPasillo = () => {
            const pasillo = document.createElement('div')
            pasillo.className = 'pasillo'
            return pasillo
        }

        const seleccionarButaca = (butaca) => {
            if (butaca.classList.contains('ocupada')) {
                return
            }
            butaca.classList.toggle('seleccionada')
            const numeroButaca = parseInt(butaca.dataset.numero)
            
            if (butaca.classList.contains('seleccionada')) {
                addCarrito(numeroButaca, pelicula)
                datosCompra.cantidadButacas++
                datosCompra.butacas.push(numeroButaca);
                datosCompra.costoTotal += datosCompra.precio
            } else {
                quitarCarrito(numeroButaca)
                datosCompra.cantidadButacas--
                const indiceButaca = datosCompra.butacas.indexOf(numeroButaca)
                if (indiceButaca !== -1) {
                    datosCompra.butacas.splice(indiceButaca, 1)
                    datosCompra.costoTotal -= datosCompra.precio
                }
            }

            actualizacionButacas()
        }
        
        const addCarrito = (numeroButaca, pelicula) => {
            const itemLista = document.createElement('li')
            itemLista.textContent = `Butaca n° ${numeroButaca} -- $${pelicula.costo_entrada}`
            itemLista.dataset.numero = numeroButaca
            ul.appendChild(itemLista)
        }

        const quitarCarrito = (numeroButaca) => {
            const itemAgregado = ul.querySelector(`li[data-numero="${numeroButaca}"]`)
            itemAgregado && ul.removeChild(itemAgregado) 
        }

        const actualizacionButacas = () => {
            if (ul.querySelector('li')) {
                confirmarButacas.style.display = 'block'
                carritoVacio.style.display = 'none'
            } else {
                confirmarButacas.style.display = 'none'
                carritoVacio.style.display = 'block'
            }
        }

        for (let i = 0; i < filas; i++) {
            const fila = document.createElement('div')
            fila.className = 'fila'

            const grupoButacas1 = crearGrupoButacas(3, numeroButaca, pelicula.butacasOcupadas)
            numeroButaca += 3
            const pasillo1 = crearPasillo()
            const grupoButacas2 = crearGrupoButacas(6, numeroButaca, pelicula.butacasOcupadas)
            numeroButaca += 6
            const pasillo2 = crearPasillo()
            const grupoButacas3 = crearGrupoButacas(3, numeroButaca, pelicula.butacasOcupadas)
            numeroButaca += 3

            fila.appendChild(grupoButacas1)
            fila.appendChild(pasillo1)
            fila.appendChild(grupoButacas2)
            fila.appendChild(pasillo2)
            fila.appendChild(grupoButacas3)

            cine.appendChild(fila)
        }
    }

    seleccionarPelicula(pelicula)

