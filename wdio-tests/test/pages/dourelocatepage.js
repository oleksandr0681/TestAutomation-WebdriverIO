class DouRelocatePage {
    get newsHyperlink() { return $('a[href="https://dou.ua/lenta/news/?from=fpnews"]') }
    get blogsHyperlink() { return $('a[href="https://relocate.dou.ua/blogs/?from=fpcol"]') }
    get forumsHyperlink() { return $('a[href="https://dou.ua/forums/?from=fptopics"]') }
}

export default new DouRelocatePage()
