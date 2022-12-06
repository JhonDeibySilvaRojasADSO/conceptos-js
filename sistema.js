addEventListener("DOMContentLoaded", (e)=> {
    let formulario = document.querySelector('#form1')

    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        let datos = Object.fromEntries(new FormData(e.target))
        let gCelsius = datos.grados
        let operacion = (gCelsius*9/5)+32
        grados1.innerHTML = `${operacion} Grados Farenheit en New York..`
        hola.innerHTML = operacion
    })

    })

