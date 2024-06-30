const volverInicio = document.getElementById('volver-inicio')
volverInicio.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = '../../index.html'
})

    class Pelicula {
        constructor(nombre, formato, costo_entrada, afiche, butacasOcupadas) {
            this.nombre = nombre
            this.formato = formato
            this.costo_entrada = costo_entrada
            this.afiche = afiche
            this.butacasOcupadas = butacasOcupadas
        }
    }

    let peliculas = JSON.parse(localStorage.getItem('peliculas')) || [
        new Pelicula('Harry Potter y el Prisionero de Azkaban', '2D', 3250, '../images/HP3.jpg', []),
        new Pelicula('Furiosa', '2D', 3250, '../images/furiosa.jpg', []),
        new Pelicula('Tarot de la muerte', '2D', 3250, '../images/tarot.jpeg', []),
        new Pelicula('Intensamente 2', '3D', 4100, '../images/intensamente2.jpeg', []),
        new Pelicula('Kung Fu Panda 4', '3D', 4100, '../images/kung_fu_panda_4.jpg', []),
        new Pelicula('Garfield: Fuera de casa', '3D', 4100, '../images/the_garfield.jpg', [])
    ]

    const cartelera = document.getElementById('cartelera')
    peliculas.forEach((pelicula, i) => {
        const peliculaElemento = document.createElement('div')
        peliculaElemento.className = 'pelicula'

        const imagen = document.createElement('img')
        imagen.src = pelicula.afiche
        const descripcion1 = document.createElement('p')
        const descripcion2 = document.createElement('p')
        const descripcion3 = document.createElement('p')
        const seleccionar = document.createElement('button')
        descripcion1.className = 'nombre'
        descripcion2.className = 'formato'
        descripcion3.className = 'costo-entrada'
        descripcion1.textContent = pelicula.nombre
        descripcion2.textContent = `Formato: ${pelicula.formato}`
        descripcion3.textContent = `Costo de la entrada: $${pelicula.costo_entrada}`
        seleccionar.className = 'boton-seleccionar'
        seleccionar.textContent = 'COMPRAR ENTRADAS'
        seleccionar.addEventListener('click', () => {
            sessionStorage.setItem('peliculaSeleccionada', JSON.stringify(pelicula))
            window.location.href = './seleccionar-movie.html'
        })

        peliculaElemento.appendChild(imagen)
        peliculaElemento.appendChild(descripcion1)
        peliculaElemento.appendChild(descripcion2)
        peliculaElemento.appendChild(descripcion3)
        peliculaElemento.appendChild(seleccionar)
        cartelera.appendChild(peliculaElemento)
    })

    localStorage.setItem('peliculas', JSON.stringify(peliculas))

