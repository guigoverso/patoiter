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

    const buttonNewPost = document.getElementById('buttonNewPost')
    buttonNewPost.classList.remove(Object.values(buttonNewPost.classList).filter(className => className.indexOf('background') != -1))
    buttonNewPost.classList.add(newBackground)

    if(newBackground === 'background-white') {
        document.getElementById('logo').src = 'img/logo-blue.png'
        buttonNewPost.style.color = '#000000'
    } else {
        document.getElementById('logo').src = 'img/logo-white.png'
        buttonNewPost.style.color = '#ffffff'
    }
}

function changeBackgroundImage() {
    const body = document.querySelector('body')
    const buttonNewPost = document.getElementById('buttonNewPost')
    const src = prompt('Digite a url da image')
    if(src) {
        body.style.backgroundImage = `url(${src})`
        document.getElementById('logo').src = 'img/logo-white.png'
        buttonNewPost.classList.remove(Object.values(buttonNewPost.classList).filter(className => className.indexOf('background') != -1))
        
        buttonNewPost.classList.add('background-cyan')
        buttonNewPost.style.color = '#ffffff'
    }
}

function changeProfileImage() {
    const src = prompt('Digite a url da imagem para foto de perfil')
    if(src) {
        user.profilePic = src
        update.profilePic(user)
    }
}

function deleteAllPosts() {
    document.querySelector('#posts-area').innerHTML = ''
    document.querySelector('.hr').style.display = 'none'
}