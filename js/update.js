class Update {
    profilePic(user) {
        const userImageElements = Object.values(document.getElementsByClassName('user-image'))
        
        userImageElements.forEach(element => {
            element.src = user.profilePic
            element.style.backgroundImage = `url(${user.profilePic})`
        })
    }

    userName(user, attributeInUser, className) {
        const userNameElements = Object.values(document.getElementsByClassName(className))
        userNameElements.forEach(element => {
            element.innerHTML = user[attributeInUser]
        })
    }
}