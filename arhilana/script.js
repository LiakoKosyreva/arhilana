const btn = document.querySelector('.btn')
const image = document.querySelector('.image')
const background = document.querySelector('.background')

const images = ['images/light.svg', 'images/dark.svg']
let currentIndex = 0
let isLightBackground = true

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length
    image.src = images[currentIndex]

    if (isLightBackground) {
        background.style.background = '#363636'
    } else {
        background.style.background = '#CEC2B1'
    }

    isLightBackground = !isLightBackground
}

btn.addEventListener('click', changeImage)
