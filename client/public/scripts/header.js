console.log("test")

const header = document.querySelector('header')

const headerContainer = document.createElement('div')
header.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = document.className = 'header-left'

const logo = document.createElement("img")
logo.src = "/logo.png"

const title = document.createElement("h1")
title.innerHTML = "UnEarthed"

headerLeft.appendChild(logo)
headerLeft.appendChild(title)

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('button')
headerButton.textContent = 'Home'

headerButton.addEventListener('click', function handleClick(event){
    window.location = '/'
})

headerRight.appendChild(headerButton)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)