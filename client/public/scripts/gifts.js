
const renderGifts = async () => {

    const response = await fetch('/gifts')
    console.log(response)
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map( gift => {
            const card = document.createElement("div")
            card.classList.add("card")

            const topContainer = document.createElement("div")
            topContainer.classList.add("top-container")
            topContainer.style.backgroundImage = `url(${gift.image})`

            const bottomContainer = document.createElement("div")
            bottomContainer.classList.add("bottom-container")

            const name = document.createElement("h3")
            name.textContent = `${gift.name}`
            bottomContainer.appendChild(name)

            const audience = document.createElement("p")
            audience.textContent = `Great For: ${gift.audience}`
            bottomContainer.appendChild(audience)

            const a = document.createElement("a")
            a.textContent = "Read Mode >"
            a.href = `/gifts/${gift.id}`
            a.setAttribute('role', 'button')
            bottomContainer.appendChild(a)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)

        })
    }else {
        const h2 = document.createElement("h2")
        h2.textContent = "No Gifts Available 😞"
        mainContent.appendChild(h2)
    }
}

const requestedID = window.location.href.split('/').pop()
console.log(requestedID)

if (requestedID){
    window.location.href = '/404.html'
}else{
    renderGifts()
}


