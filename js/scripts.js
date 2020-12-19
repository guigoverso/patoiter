function changeImage(element, newImg) {
    const olderImg = element.src
    element.src = newImg
    element.onmouseout = () => element.src = olderImg
}