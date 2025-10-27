const container = document.querySelector(".toto")
const watcher = document.querySelector(".interaction-watcher")

const addContent = () => {
    for (let i = 0; i < 5; i++){
        const card = document.createElement("div")
        card.className = "v-skider-block"
        card.innerHTML = ` <div class="card"></div>`

        console.log("toto")
        container.appendChild(card)
    }

}

const handeleIntersect = entries => {
    console.log(entries)
    if(entries[0].isIntersecting){
        addContent()
    }
}

new IntersectionObserver(handeleIntersect).observe(watcher)