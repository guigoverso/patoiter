function changeImage(element, newImg) {
    const olderImg = element.src
    element.style.cursor = 'pointer'
    element.src = newImg
    element.onmouseout = () => element.src = olderImg
}

function changeBackground(newBackground) {
    const body = document.querySelector('body')
    body.classList.remove(Object.values(body.classList).filter(className => className.indexOf('background') != -1))
    body.style.backgroundImage = ''
    body.classList.add(newBackground)

    if(newBackground === 'background-white') {
        document.getElementById('logo').src = '../img/logo-blue.png'
    } else {
        document.getElementById('logo').src = '../img/logo-white.png'
    }
}

function changeBackgroundImage() {
    const body = document.querySelector('body')
    const src = prompt('Digite a url da image')
    console.log(src)
    if(src) {
        body.style.backgroundImage = `url(${src})`
        document.getElementById('logo').src = '../img/logo-white.png'
    }
}