function addImage() {
    const newImage = prompt('Digite o endereço onde está localizado a imagem')
    //if(newImage = '') return

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
    console.log('Entrou')
    const allImgs = Object.values(newPostImageArea.children)
    const imagesAdded = newPostImageArea.childElementCount
    const imgsWidth = Math.round(100 / imagesAdded)
    console.log(allImgs)
    allImgs.forEach(img => {
        console.log('ForEach')
        img.style.width = imgsWidth + '%'
    })
}

function deleteImage(img) {
    const newPostImageArea = document.getElementById('new-post-image-area')
    newPostImageArea.removeChild(img)
    resizeImage(newPostImageArea)
}