class DouJobPage {
    get searchButton() { return $('.btn-search') }
    get example() { return $('.example') }

    async clickOnSearch() {
        await this.searchButton.click()
    }
}

export default new DouJobPage()
