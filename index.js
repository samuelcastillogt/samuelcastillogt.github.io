document.getElementById("proyectos").addEventListener("click", ()=>{
    const mensaje = document.getElementById("proyectos").textContent.toString()
    console.log(mensaje)
    if(mensaje  == "Ver Proyectos"){
        document.getElementById("proyectos").textContent = "Ocultar"
    }else if(mensaje == "Ocultar"){
        document.getElementById("proyectos").textContent= "Ver Proyectos"
    }
    document.getElementById("project").classList.toggle("hidden")
    document.getElementById("project").classList.toggle("proyectos")
})