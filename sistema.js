addEventListener("DOMContentLoaded", (e)=> {
    let formulario = document.querySelector('#form1')
    let formulario2 = document.querySelector('#form2')

    formulario.addEventListener('submit', (e) => {
        e.preventDefault()
        let datos = Object.fromEntries(new FormData(e.target))
        let vDolar = parseFloat(4800)
        let input = datos.dolar
        let operacion = vDolar*input
        dolares.innerHTML = `${operacion} Pesos`

    })
    formulario2.addEventListener('submit', (e) => {
        e.preventDefault()
        let datos = Object.fromEntries(new FormData(e.target))
        let vPeso = 0.00021
        let input = datos.peso
        let operacion = input*vPeso
        pesos.innerHTML = `${operacion} Dolares`
    })

    })
