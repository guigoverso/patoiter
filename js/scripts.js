function changeImage(element, newImg) {
    const olderImg = element.src
    element.style.cursor = 'pointer'
    element.src = newImg
    element.onmouseout = () => element.src = olderImg
}