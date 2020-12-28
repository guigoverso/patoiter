class User {
    constructor() {
        this._name = 'yourusername'
        this._displayName = 'Your Username'
        this.profilePic = 'img/user.png'
        this._posts = []
    }

    get name() {
        return this._name
    }

    set name(newName) {
        this._name = newName
    }

    get displayName() {
        return this._displayName
    }

    set displayName(newDisplayName) {
        this._displayName = newDisplayName
    }

    get posts() {
        return this._posts
    }
}