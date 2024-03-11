class GitHubNewsletterPage {
    get brandHeader() { return $('#hero-section-brand-heading') }
    get emailInput() { return $('//input[@id=":R8d76:"]') }
    get countrySelect() { return $('#country') }
    get countryOption() { return $('option[value="VU"]') }
    get marketingCheckbox() { return $('#gated-agree-marketingEmailOptin1') }
    get subscribeButton() { return $('button[type="submit"]') }

    async setEmailInput(value) {
        await this.emailInput.setValue(value)
    }

    async clickOnCountrySelect() {
        await this.countrySelect.click()
    }

    async selectCountry() {
        await this.countrySelect.selectByAttribute('value', 'VU');
    }

    async clickOnMarketingCheckbox() {
        await this.marketingCheckbox.click()
    }

    async clickOnSubscribeButton() {
        await this.subscribeButton.click()
    }
}

export default new GitHubNewsletterPage()
