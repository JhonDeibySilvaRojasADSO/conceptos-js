addEventListener("DOMContentLoaded", (e)=> {
    var chec1 = document.getElementById("check3")
    var chec2 = document.getElementById("check4")
    var chec3 = document.getElementById("check2")
    var chekear = document.getElementById("check1");
    var list = document.getElementById("list");

    chekear.addEventListener("click", (e)=>
    {
        if (chekear.checked && chec1.checked && chec2.checked && chec3.checked) {
            list.innerHTML = "Haz sido agilizado tu dia. ";
        } else{
            list.innerHTML = "Tienes tareas por terminar.";
        }

    })

})

