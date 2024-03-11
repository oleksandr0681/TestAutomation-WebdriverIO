class GitHubSearchPage {
    // get searchResults() { return $('main.Box-sc-g0xbh4-0') }
    get searchResults() { return $('//div[@data-testid="results-list"]') }
}

export default new GitHubSearchPage()
