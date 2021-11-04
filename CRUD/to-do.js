const guardar = document.getElementById("guardar")
const cardCollection = document.getElementById("card-collection")
const form = document.getElementById("form")
const crear = document.getElementById("crear")
function addRemoveBtn(){
    const removeBtn = document.createElement("button")
    removeBtn.textContent= "Terminada"
    removeBtn.className= "btn btn-danger"
    removeBtn.addEventListener("click", (e)=>{
        const task = e.target.parentElement
        cardCollection.removeChild(task)
    })
    return removeBtn
}
const task = (title)=>{
    const card = document.createElement("li")
    card.textContent = title
    card.appendChild(addRemoveBtn())
    cardCollection.appendChild(card) 
}
const save = (e)=>{
    e.preventDefault()
    const title = document.getElementById("title").value
    task(title)
    form.reset()
    form.classList.add("hidden")
    crear.classList.remove("hidden")
}
crear.addEventListener("click", ()=>{
    form.classList.remove("hidden")
    crear.classList.add("hidden")
})
guardar.addEventListener("click", save)
