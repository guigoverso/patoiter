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
    imgTag.classList.add('new-post-image')
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

function authorizeButtonToEdit(button) {
    button.readOnly = false
    button.value = ''
}

function changeUserName(type, button) {
    if(button.value == '') {
        if(type == 'display') button.value = user.displayName
        else if(type == 'user') button.value = user.name
        return
    }
    if(type == 'display') {
        user.displayName = button.value
        update.userName(user, 'displayName', 'post-username')
    } else if (type == 'user') {
        user.name = button.value
        update.userName(user, 'name', 'post-user')
    }
}

function newPost() {
    const textContent = document.querySelector('#newPostTextContent')
    const imagesArea = document.querySelector('#new-post-image-area')

    const newPost = new Post()

    if(textContent.value == '' && imagesArea.childElementCount == 0) return

    newPost.id = user.posts.length > 0 ? user.posts[user.posts.length - 1].id + 1 : 0
    newPost.author = document.querySelector('#userName').value
    newPost.displayName = document.querySelector('#userDisplayName').value
    const date = new Date()
    newPost.dateTime = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2)
    newPost.textContent = textContent.value
    
    Object.values(imagesArea.children).forEach(img => {
        newPost.images.push(img)
    })

    user.posts.push(newPost)
    addNewPost(newPost)

    textContent.value = ''
    imagesArea.innerHTML = ''
    window.scrollTo(0, 0)

    document.querySelector('.hr').style.display = 'block'
}

function addNewPost(newPost) {
    const article = document.createElement('article')
    article.classList = 'post post-width'
    article.id = 'patoiter-' + newPost.id
    article.innerHTML = postModel(newPost)
    
    const postsArea = document.querySelector('#posts-area')
    postsArea.appendChild(article)
}

function removePost(postId) {
    const postIdInPosts = user.posts.findIndex(post => post.id == postId)
    user.posts.splice(postIdInPosts, 1)

    const postsArea = document.querySelector('#posts-area')
    const thisPost = document.querySelector('#patoiter-' + postId)
    postsArea.removeChild(thisPost)

    if(postsArea.childElementCount == 0) document.querySelector('.hr').style.display = 'none'
}

function postModel(newPost) {
    let images = ''
    newPost.images.forEach(image => {
        images += `<a href="${image.src}" target="_blank" class="is-flex"><img src="${image.src}" width="${image.width}" class="post-image"></a>`
    })
    
    return `<div class="card b-radius-card"><div class="card-content"><div class="media"><div class="media-left"> <div class="img-size-responsive user-image rounded" style="background-image: url(${user.profilePic})"></div></div><div class="media-content"><p class="post-username">${newPost.displayName}</p><div> <i class="fas fa-at color-gray"></i> <span class="post-user">${newPost.author}</span></div></div></div><div class="content m-0"><p class="pre-wrap">${newPost.textContent}</p><div class="post-image-area">${images}</div></div><div class="card-footer border-none"><div class="card-footer-item p-0 is-justify-content-space-between is-align-content-center"><span class="post-date-time is-align-self-flex-end">${newPost.dateTime}</span><img src="img/trash.png" alt="Clear patoites" class="img-size-w-30" onmouseover="changeImage(this, 'img/trash-open.png')" onmousedown="removePost(${newPost.id})"></div></div></div>`
}