function addImage() {
    const newImage = prompt('Digite o endereço onde está localizado a imagem')
    if(newImage == '' || newImage == null) return
    console.log(newImage)
    const newPostImageArea = document.getElementById('new-post-image-area')
    const imagesAdded = newPostImageArea.childElementCount
    if(imagesAdded == 4) {
        alert('Só é possível adicionar 4 imagens')
        return
    } 

    const imgTag = document.createElement('img')
    imgTag.src = newImage
    imgTag.setAttribute('onclick', 'deleteImage(this)')
    newPostImageArea.appendChild(imgTag)

    resizeImage(newPostImageArea)
}

function resizeImage(newPostImageArea) {
    const allImgs = Object.values(newPostImageArea.children)
    const imagesAdded = newPostImageArea.childElementCount
    const imgsWidth = Math.round(100 / imagesAdded)
    
    allImgs.forEach(img => {
        img.style.width = imgsWidth + '%'
    })
}

function deleteImage(img) {
    const newPostImageArea = document.getElementById('new-post-image-area')
    newPostImageArea.removeChild(img)
    resizeImage(newPostImageArea)
}

function authorizeButtonToEdit(button, focusOutEvent) {
    button.readOnly = false
}

function changeUserName(type, newName) {
    if(type == 'display') {
        user.displayName = newName
        update.userName(user, 'displayName', 'post-username')
    } else if (type == 'user') {
        user.name = newName
        update.userName(user, 'name', 'post-user')
    }
}

function newPost() {
    const textContent = document.querySelector('#newPostTextContent')
    const imagesArea = document.querySelector('#new-post-image-area')

    const newPost = new Post()

    if(textContent.value == '' && imagesArea.childElementCount == 0) return

    newPost.id = user.posts.length
    newPost.author = document.querySelector('#userName').value
    newPost.displayName = document.querySelector('#userDisplayName').value
    newPost.dateTime = `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()} ${new Date().getHours()}:${new Date().getMinutes()}`
    newPost.textContent = textContent.value
    
    Object.values(imagesArea.children).forEach(img => {
        newPost.images.push(img)
    })

    user.posts.push(newPost)
    addNewPost(newPost)

    textContent.value = ''
    imagesArea.innerHTML = ''
    window.scrollTo(0, 0)
}

function addNewPost(newPost) {
    const article = document.createElement('article')
    article.classList = 'post post-width'
    article.innerHTML = postModel(newPost)
    
    const postsArea = document.querySelector('#posts-area')
    postsArea.appendChild(article)
}

function postModel(newPost) {
    let images = ''
    newPost.images.forEach(image => {
        images += `<a href="${image.src}" target="_blank"><img src="${image.src}" width="${image.width}"></a>`
    })
    
    return `<div class="card b-radius-card"><div class="card-content"><div class="media"><div class="media-left"> <img src="img/user.png" alt="user pic" class="img-size-50x50 user-image"></div><div class="media-content"><p class="post-username">${newPost.displayName}</p><div> <i class="fas fa-at color-gray"></i> <span class="post-user">${newPost.author}</span></div></div></div><div class="content m-0"><p>${newPost.textContent}</p><div class="post-image-area">${images}</div></div><div class="card-footer border-none"><div class="card-footer-item p-0 is-justify-content-space-between is-align-content-center"><span class="post-date-time is-align-self-flex-end">${newPost.dateTime}</span><img src="img/trash.png" alt="Clear patoites" class="img-size-w-30" onmouseover="changeImage(this, 'img/trash-open.png')"></div></div></div>`
}