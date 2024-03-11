class GitHubEnterprisePlanPage {
    // get trialPlanHeader() { return $('h1.d-none') }
    get trialPlanHeader() { return $('h1.d-md-block') }
    get enterpriseCloudHyperlink() { return $('a .pricing-recommended-plan') }

    async clickOnEnterpriseCloud() {
        await this.enterpriseCloudHyperlink.click()
    }
}

export default new GitHubEnterprisePlanPage()
