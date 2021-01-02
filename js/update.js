class Update {
    profilePic(user) {
        const userImageElements = Object.values(document.getElementsByClassName('user-image'))
        
        userImageElements.forEach(element => {
            element.style.backgroundImage = `url(${user.profilePic})`
            element.classList.add('rounded')
        })
    }

    userName(user, attributeInUser, className) {
        const userNameElements = Object.values(document.getElementsByClassName(className))
        userNameElements.forEach(element => {
            element.innerHTML = user[attributeInUser]
        })
    }
}