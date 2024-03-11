class GitHubPricingPage {
    get Header1() { return $('h1.h2-mktg') }
    get compareHyperlink() { return $('a[href="#compare-features"]') }
    get compareFeaturesHeader() { return $('h1.h1') }

    async scrollToCompareAllFeatures() {
        await this.compareHyperlink.scrollIntoView()
    }

    async clickOnCompareAllFeatures() {
        await this.compareHyperlink.click()
    }
}

export default new GitHubPricingPage()
