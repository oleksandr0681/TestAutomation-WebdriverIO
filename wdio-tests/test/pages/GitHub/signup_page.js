class GitHubSignUpPage {
    get emailInput() { return $('#email') }
    get welcome() { return $('.signup-content-container span[data-target="typing-effect.content"]') }
    get continueToPasswordButton() { return $('//button[contains(@class, "signup-continue-button") and @data-continue-to="password-container"]') }
    get passwordInput() { return $('#password') }
    get continueToUsernameButton() { return $('//button[contains(@class, "signup-continue-button") and @data-continue-to="username-container"]') }
    get usernameInput() { return $('#login') }
    get continueToOptButton() { return $('//button[contains(@class, "signup-continue-button") and @data-continue-to="opt-in-container"]') }
    get optInput() { return $('#opt_in') }
    get continueToSubmitButton() { return $('//button[contains(@class, "signup-continue-button") and @data-continue-to="captcha-and-submit-container"]') }

    async waitUntilEmailIsExist() {
        await browser.waitUntil(async () => {
            return this.emailInput.isExisting()
        }, 10000, "E-mail input is not exists.")
    }

    async setEmailInput(value) {
        await this.emailInput.setValue(value)
    }

    async setPasswordInput(value) {
        await this.passwordInput.setValue(value)
    }

    async setUsernameInput(value) {
        await this.usernameInput.setValue(value)
    }

    // async setOptInput(value) {
    //     await this.optInput.setValue(value)
    // }

    async clickOnContinueToPassword() {
        await browser.waitUntil(async () => {
            return this.continueToPasswordButton.isClickable()
        }, 10000, '"Continue" button is not clickable.')
        await this.continueToPasswordButton.click()
    }

    async clickOnContinueToUsername() {
        await browser.waitUntil(async () => {
            return this.continueToUsernameButton.isClickable()
        }, 10000, '"Continue" button is not clickable.')
        await this.continueToUsernameButton.click()
    }

    async clickOnContinueToOpt() {
        await browser.waitUntil(async () => {
            return this.continueToOptButton.isClickable()
        }, 10000, '"Continue" button is not clickable.')
        await this.continueToOptButton.click()
    }

    async clickOnOptInput() {
        await browser.waitUntil(async () => {
            return (await this.optInput).isClickable()
        }, 10000, '"Receive occasional product updates and announcements" checkbox is not clickable.')
        await this.optInput.click()
    }

    async clickOnContinueToSubmit() {
        await browser.waitUntil(async () => {
            return this.continueToSubmitButton.isClickable()
        }, 10000, '"Continue" button is not clickable.')
        await this.continueToSubmitButton.click()
    }
}

export default new GitHubSignUpPage()
