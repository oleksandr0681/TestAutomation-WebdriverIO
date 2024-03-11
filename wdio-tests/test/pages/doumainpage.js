class DouMainPage {
    get salariesHyperlink() { return $('a[href="https://jobs.dou.ua/salaries/"]') }
    get jobHyperlink() { return $('a[href="https://jobs.dou.ua/"]') }
    get relocateHyperlink() { return $('.menu-site__relocate') }

    async clickOnSalaries() {
        await this.salariesHyperlink.click()
    }

    async clickOnJob() {
        await this.jobHyperlink.click()
    }

    async clickOnRelocate() {
        await this.relocateHyperlink.click()
    }
}

export default new DouMainPage()
