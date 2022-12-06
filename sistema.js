addEventListener("DOMContentLoaded", (e)=>{
    let form=document.querySelector('#form') 
    let contadorPasos = 1
    form.addEventListener("submit",(e)=>{
        e.preventDefault();       
        let datos = Object.fromEntries(new FormData(e.target))
        let input = datos.arroz
        let tabla =document.querySelector("tbody");
        tabla.insertAdjacentHTML("beforeend",`
                <tr>
                    <td> ${contadorPasos}  </td>
                    <td> ${input}  </td>
                </tr>
                `)
            contadorPasos++

    })               
})

