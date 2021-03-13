export default class UserInfo {
    constructor({titleName, subtitleName}) {
        this._titleName = document.querySelector(titleName)
        this._subtitleName = document.querySelector(subtitleName)
    }

    getUserInfo() {
        const userInfo = {
            name: this._titleName.textContent,
            activity: this._subtitleName.textContent
    }
    return userInfo
}

    setUserInfo({ name, activity }) {
        this._titleName.textContent = name
        this._subtitleName.textContent = activity
    }
}