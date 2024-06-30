document.getElementById("ejecutarBtn3").addEventListener("click", function() {
    window.location.href = './Pre-entrega3/pages/inicio.html'
})
const borrarDatosStorage = document.getElementById('borrarDatosStorage')
borrarDatosStorage.addEventListener('click', () => {
    localStorage.clear()
    sessionStorage.clear()
    window.location.reload()
})