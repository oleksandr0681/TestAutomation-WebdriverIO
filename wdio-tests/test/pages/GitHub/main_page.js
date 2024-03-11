class GitHubMainPage {
    get signUpHyperlink() { return $('.HeaderMenu-link--sign-up') }
    // get thePlaceForAnyoneHeader() { return $('//h2[contains(text(), "The place for anyone from anywhere")]') }
    get Over100millionHeader() { return $('h2.h2-mktg') }
    get enterprisePlanHyperlink() { return $('a[href="/organizations/enterprise_plan?ref_cta=Start+a+free+enterprise+trial&ref_loc=Home+campaign+footer&ref_page=%2F"]') }
    get pricingHyperlink() { return $('.HeaderMenu-item a[href="/pricing"]') }
    get subscribeHyperlink() { return $('a[href="https://resources.github.com/newsletter/"]') }
    get searchButton() { return $('button[data-target="qbsearch-input.inputButton"]') }
    get searchInput() { return $('#query-builder-test') }

    async clickOnSignUp() {
        await this.signUpHyperlink.click()
    }

    // async scrollToThePlaceForAnyone() {
    //     await this.thePlaceForAnyoneHeader.scrollIntoView()
    // }

    async scrollToOver100million() {
        await this.Over100millionHeader.scrollIntoView()
    }

    async clickOnEnterprisePlan() {
        await this.enterprisePlanHyperlink.click()
    }

    async scrollToSubscribe() {
        await this.subscribeHyperlink.scrollIntoView()
    }

    async clickOnSubscribeHyperlink() {
        await this.subscribeHyperlink.click()
    }

    async clickOnSearchButton() {
        await this.searchButton.click()
    }

    async setSearchInput(value) {
        await this.searchInput.setValue(value)
    }

    async clickOnPricing() {
        await this.pricingHyperlink.click()
    }
}

export default new GitHubMainPage()
