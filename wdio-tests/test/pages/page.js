class LoginPage {
    constructor() {
        this.title = 'My Page'
    }

    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginButton() { return $('.radius') }

    async open (path) {
        await browser.url(path)
    }

    async setUsernameInput(value) {
        await this.username.setValue(value)
    }

    async addUsernameInput(value) {
        await this.username.addValue(value)
    }

    async setPasswordInput(value) {
        await this.password.setValue(value)
    }

    async clickOnloginButton() {
        await this.loginButton.click()
    }
}

export default new LoginPage()
