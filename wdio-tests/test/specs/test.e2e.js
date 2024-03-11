import { expect } from '@wdio/globals'
import { Key } from 'webdriverio'
import LoginPage from './../pages/page.js'
import DouMainPage from './../pages/doumainpage.js'
import DouSalariesPage from '../pages/dousalariespage.js';
import DouJobPage from '../pages/doujobpage.js';
import DouRelocatePage from '../pages/dourelocatepage.js';
import GitHubMainPage from './../pages/GitHub/main_page.js';
import GitHubSignUpPage from './../pages/GitHub/signup_page.js';
import GitHubEnterprisePlanPage from './../pages/GitHub/enterprise_plan_page.js';
import GitHubNewsletterPage from './../pages/GitHub/newsletter_page.js';
import GitHubConfirmationPage from './../pages/GitHub/confirmation_page.js';
import GitHubSearchPage from './../pages/GitHub/search_page.js';
import GitHubPricingPage from './../pages/GitHub/pricing_page.js';

describe("Webdriverio main page", () => {

    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io');
        const title = await browser.getTitle();
        console.log(title);
        await expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js | WebdriverIO');
    });

    xit("should show addValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username");
        await input.addValue("hello");
        await browser.pause(2000);

        await input.addValue(123);
        await browser.pause(2000);

        await expect(input).toHaveValue("hello123");
    });

    xit("should show setValue command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let input = await $("#username");
        await input.setValue("world");
        await input.setValue("hello");
        await browser.pause(2000);

        console.log(await input.getValue());
        await expect(input).toHaveValue("hello");
    });

    xit("should show click command", async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        let loginButton = await $(".radius");
        await browser.pause(2000);
        await loginButton.click();
        await browser.pause(4000);

        let inputUsername = await $("#username");
        await inputUsername.addValue("tomsmith");
        await browser.pause(2000);

        let inputPassword = await $("#password");
        await inputPassword.addValue("SuperSecretPassword!");
        await browser.pause(2000);

        await loginButton.click();
        await browser.pause(4000);
    });

    xit("should show getAttribute command", async () => {
        await browser.url('https://dou.ua/search');

        let inputSearch = await $("#gsc-i-id1");
        let attr = await inputSearch.getAttribute("aria-label");
        console.log("Placeholder attribute is: " + attr); // outputs: шукати

        await inputSearch.setValue("Cat");
        attr = await inputSearch.getValue();
        await browser.pause(2000);
        console.log("Value attribute is: " + attr); // outputs: Cat
    });

    xit("should show getAttribute command", async () => {
        await browser.url('https://dou.ua');

        let inputSearch = await $("#txtGlobalSearch");
        let location = await inputSearch.getLocation();
        console.log("Location is: " + location); // outputs: x, y

        let xLocation = await inputSearch.getLocation("x");
        console.log("Location by x is: " + xLocation); // outputs: x
    });

    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io');
        
        let subtitle = await $(".hero__subtitle");
        console.log("Subtitle text is: " + await subtitle.getText()); // outputs: Next-gen browser...
    });

    // Домашнє завдання урока 8.
    // - Зайти на сайт https://webdriver.io .
    // - Клацнути на посилання "API".
    // - Перевірити, що URL такий: https://webdriver.io/docs/api .
    // - Перевірити, що в заголовку h1 є "Introduction". Або перевірити присутність 
    //   "Introduction" в хлібних крихтах.
    // - Перевірити, що атрибут WebDriver має посилання https://webdriver.io/docs/api/webdriver .
    // - Натиснути на Search, ввести там "all is done" і натиснути на крестик або 
    //   витерти (видалити) "all is done".
    xit("should have correct title", async () => {
        await browser.url('https://webdriver.io');
        
        const hyperlinkAPI = await $("#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > a:nth-child(4)");
        const APIAttribute = await hyperlinkAPI.getAttribute("href");
        console.log("API hyperlink: " + APIAttribute);
        await hyperlinkAPI.click();
        await expect(browser).toHaveUrl('https://webdriver.io/docs/api');

        const h1 = await $("h1");
        console.log("h1 text: " + await h1.getText());
        await browser.pause(3000);
        await expect(h1).toHaveTextContaining('Introduction');

        const hyperlinkWebDriver = await $("#docusaurus_skipToContent_fallback > div > main > div > div > div > div > article > div.theme-doc-markdown.markdown > p:nth-child(2) > a:nth-child(1)");
        console.log("WebDriver hyperlink: " + await hyperlinkWebDriver.getAttribute("href"));
        await expect(hyperlinkWebDriver).toHaveHrefContaining('/docs/api/webdriver');

        const searchButton = await $("#__docusaurus > nav > div.navbar__inner > div.navbar__items.navbar__items--right > div.searchBox_ZlJk > button");
        await searchButton.click();
        await browser.pause(2000);
        let searchInput = await $("#docsearch-input");
        await searchInput.setValue("all is done");
        await browser.pause(3000);
        await searchInput.clearValue();
        await browser.pause(3000);
    });

    xit("should show if an element is clickable", async () => {
        await browser.url('https://webdriver.io')
        
        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let clickable = await blogButton.isClickable()
        console.log("Is clickable: " + clickable) // outputs: true
    });

    xit("should show if an element is displayed", async () => {
        await browser.url('https://webdriver.io')
        
        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayed = await blogButton.isDisplayed()
        console.log("Is displayed: " + displayed) // outputs: true
    });

    xit("should show if an element is visible", async () => {
        await browser.url('https://webdriver.io')
        
        const blogButton = await $('.button[href="/docs/gettingstarted"]')
        let displayedInViewport = await blogButton.isDisplayedInViewport() 
        console.log("Is blog button displayed in viewport: " + displayedInViewport) // outputs: true

        const footer = await $('.footer__link-item[href="/docs/gettingstarted"]')
        let footerIsDisplayedInViewport = await footer.isDisplayedInViewport()
        console.log("Is footer displayed in viewport: " + footerIsDisplayedInViewport) // outputs: false
    });

    xit("should show if an element is enabled", async () => {
        await browser.url('https://webdriver.io')
        
        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isEnabled = await getStartedButton.isEnabled()
        console.log("Is get started button enabled: " + isEnabled) // outputs: true
    });

    xit("should show if an element is focused", async () => {
        await browser.url('https://webdriver.io')
        
        const getStartedButton = await $('.button[href="/docs/gettingstarted"]')
        let isFocused = await getStartedButton.isFocused()
        console.log("Is get started button focused before click: " + isFocused) // outputs: false
        await browser.pause(2000)
        await getStartedButton.click()
        console.log("Is get started button focused after click: " + isFocused) // outputs: true
        await browser.pause(2000)
    });

    xit("should show movement to element action", async () => {
        await browser.url('https://webdriver.io')

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
    });

    xit("should show save screenshot command", async () => {
        await browser.url('https://webdriver.io')

        const getStartedLink = await $('.footer__link-item[href="/docs/gettingstarted"]')
        await browser.pause(2000)
        await getStartedLink.scrollIntoView()
        await browser.pause(2000)
        await getStartedLink.saveScreenshot('linkScreenshot.png')
    });

    xit("should switch to another window", async () => {
        await browser.url('https://webdriver.io')

        await browser.newWindow('https://www.google.com')
        await browser.pause(2000)

        await browser.switchWindow('https://webdriver.io')
        await browser.pause(2000)
    });

    xit("should show waitUntil command", async () => {
        await browser.url('https://webdriver.io')

        await browser.waitUntil(async () => {
            return $('.button[href="/docs/gettingstarted"]').isDisplayed()
        }, 5000, "Button is not displayed")
    });

    xit("should switch get html for certain elements", async () => {
        await browser.url('https://webdriver.io')

        const outerHTML = await $('.dropdown__menu').getHTML()
        console.log("outerHTML: " + outerHTML)

        const innerHTML = await $('.dropdown__menu').getHTML(false)
        console.log("innerHTML: " + innerHTML)
    });

    // Домашнє завдання урока 13.
    // Перейти до сторінки https://webdriver.io ,або інший сайт.
    // Клацнути на гіперпосилання API.
    // За допомогою метода scrollIntoView() прокрутити екран і перевірити одне з 
    // гіперпосилань в підвалі (footer), що воно isDisplayed.
    // Також перевірити, що гіперпосилання "Protocol commands" is visible 
    // (isDisplayedInViewport()), isClickable() і взяти getHTML().
    // Після цього клацнути на неї ("protocolCommands") і дочекатися за допомогою 
    // метода waitUntil() на заголовок "WebDriver Protocol" (перевірити, що 
    // заголовок через кілька секунд з'являється). 
    it.skip("Home task 13", async () => {
        await browser.url('https://webdriver.io')

        const APIHyperlink = await $('.navbar--fixed-top a[href="/docs/api"]')
        await APIHyperlink.click()
        await browser.pause(5000)
        const gettingStartedHyperlink = await $('.footer a[href="/docs/gettingstarted"]')
        await gettingStartedHyperlink.scrollIntoView()
        let startedDisplayed = await gettingStartedHyperlink.isDisplayed()
        console.log("Getting started hyperlink is displayed: " + startedDisplayed) 
        const protocolCommandsHyperlink = await $('.pagination-nav > a[href="/docs/api/protocols"]')
        let protocolCommandsVisible = await protocolCommandsHyperlink.isDisplayedInViewport()
        console.log("Protocol Commands is displayed in viewport: " + protocolCommandsVisible)
        let protocolCommandsClickable = await protocolCommandsHyperlink.isClickable()
        console.log("Protocol Commands is clickable: " + protocolCommandsClickable)
        const protocolCommandsHTML = await protocolCommandsHyperlink.getHTML()
        console.log("Protocol Commands HTML: " + protocolCommandsHTML)
        await browser.pause(4000)
        await protocolCommandsHyperlink.click()
        const protocolCommandsHeader = await $('#webdriver-protocol')
        await protocolCommandsHeader.waitUntil(async () => {
            return (await protocolCommandsHeader.getText()) == 'WebDriver Protocol'
        }, 5000, "Text is not displayed")
        await browser.pause(4000)
    });

    // Домашнє завдання урока 19.
    // Створити 5 тестових випадків, наприклад на сайті https://github.com.
    // На основі тестових випадків створити тестові сценарії.
    it.skip("Checking the Sign in hyperlink", async () => {
        await browser.url('https://github.com');
        const signIn = await $('.HeaderMenu-link--sign-in');
        await signIn.click();
        await browser.pause(4000);
        await expect(browser).toHaveUrl('https://github.com/login');
    });

    it.skip("Checking the search with valid data.", async () => {
        await browser.url('https://github.com')
        const searchButton = await $('.header-search-button')
        await searchButton.click()
        const searchInput = await $('#query-builder-test')
        searchInput.setValue("gull")
        const action = await $('.ActionListItem')
        await browser.pause(2000)
        await action.click()
        const resultsList = await $('[data-testid="results-list"]')
        await expect(resultsList).toHaveTextContaining('gull')
        await browser.pause(5000)
    });

    it.skip("Checking the Pricing page on the site.", async () => {
        await browser.url('https://github.com')
        const pricingLink = await $('.HeaderMenu-item [href="/pricing"]')
        await pricingLink.click()
        const main = await $('.application-main')
        await expect(main).toHaveTextContaining('Free')
        await browser.pause(4000)
    });

    it.skip("Checking the ReadME Project hyperlink on the site.", async () => {
        await browser.url('https://github.com')
        const openSourceButton = await $('//*[contains(text(), "Open Source") and contains(@class, "HeaderMenu-link")]')
        await openSourceButton.click()
        const readMeLink = await $('//*[contains(@class, "HeaderMenu-dropdown-link") and @href="/readme"]')
        await readMeLink.click()
        await expect(browser).toHaveUrl('https://github.com/readme')
        await browser.pause(4000)
    });

    it.skip("Checking the Packages page on the site", async () => {
        await browser.url('https://github.com')
        const productButton = await $('//*[contains(text(), "Product") and contains(@class, "HeaderMenu-link")]')
        await productButton.click()
        const packagesLink = await $('//*[contains(@class, "HeaderMenu-dropdown-link") and @href="/features/packages"]')
        await packagesLink.click()
        const main = await $('.application-main')
        await expect(main).toHaveTextContaining('Your packages')
        await browser.pause(4000)
    });

    it.skip("should show addValue command (with page object)", async () => {
        // await browser.url('https://the-internet.herokuapp.com/login');

        await LoginPage.open('https://the-internet.herokuapp.com/login')
        await LoginPage.setUsernameInput("hello")
        await browser.pause(2000);

        await LoginPage.addUsernameInput(123)
        await browser.pause(2000);

        await LoginPage.setUsernameInput("tomsmith")
        await browser.pause(2000);

        await LoginPage.setPasswordInput("SuperSecretPassword!")
        await browser.pause(2000)

        await LoginPage.clickOnloginButton()
        await browser.pause(4000)
    });

    // Домашнє завдання.
    // Зайти на сайт https://dou.ua
    // Далі зайти на "Зарплати", перевірити, що тут написано "квартиль". 
    // Потім перейти до "Робота", перевірити, що видно кнопку "Знайти" і натиснути 
    // на неї. Після цього перевірити, що у нас є (написано) "Швидкий перехід". 
    // Після цього зайти на "Relocate" і перевірити, що є такі секції, як "Новини", 
    // "Блоги", "Популярне на форумі", тобто перевірити, що ці слова є. 
    // Якщо є більш цікавий сайт, його перевірити. 
    // Це написати з Page Object. 
    it.skip("Home task 23. Checking the Salaries page on the site.", async () => {
        await browser.url('https://dou.ua');

        await DouMainPage.clickOnSalaries()
        await browser.pause(3000)

        await expect(DouSalariesPage.quartile1).toHaveTextContaining("I КВАРТИЛЬ")
    });

    it.skip("Home task 23. Checking the Job page on the site.", async () => {
        await browser.url('https://dou.ua');

        await DouMainPage.clickOnJob()
        await browser.pause(2000)

        await expect(DouJobPage.searchButton).toBeDisplayedInViewport()

        await DouJobPage.clickOnSearch()
        await browser.pause(2000)

        await expect(DouJobPage.example).toHaveTextContaining("Швидкий перехід")
    });

    it.skip("Home task 23. Checking the Relocate page on the site.", async () => {
        await browser.url('https://dou.ua');

        await DouMainPage.clickOnRelocate()
        await browser.pause(3000)
        
        await expect(DouRelocatePage.newsHyperlink).toHaveTextContaining("Новини")
        await expect(DouRelocatePage.blogsHyperlink).toHaveTextContaining("Блоги")
        await expect(DouRelocatePage.forumsHyperlink).toHaveTextContaining("Популярне на форумі")
    });

    // Домашнє завдання.
    // Перший тестовий випадок.
    // Реєстрація на https://github.com
    // Зайти на https://github.com . Натиснути на кнопку "Sign up" і чекати коли 
    // з'явиться input. Перевірити, що текст "Welcome..." існує. 
    // В input ввести e-mail, наприклад 123@example.com . Нажати на кнопку 
    // "Continue". 
    // В input ввести password, нажати на кнопку "Continue". 
    // Ввести username, нажати на кнопку "Continue". 
    // Вибрати checkbox "Receive occasional product updates and announcements.", 
    // нажати на кнопку "Continue". 

    // Другий тестовий випадок.
    // Зайти на https://github.com . 
    // Прокрутити екран вниз і перевірити, що headerOver "100 million 
    // developers call GitHub home" існує. 
    // Перевіряємо, що гіперпосилання "Start a free enterprise trial" is visible 
    // (toBeDisplayedInViewport) і нажимаємо на нього. 
    // Перевіряємо, що на сторінці є заголовок "Pick your trial plan" і нажимаємо 
    // на Enterprise Cloud. 

    // Третій тестовий випадок.
    // Зайти на https://github.com .
    // Прокрутити екран вниз (scrollIntoView) і перевірити, що кнопка 
    // (або гіперпосилання) "Subscribe" існує. Перевірити, що вона isClickable 
    // (toBeClickable) і нажати на неї. 
    // Перевіримо, що ми тепер на іншому домені і перевіримо, що заголовок 
    // "Subscribe to our developer newsletter" існує. 
    // В input напишемо дані. Нажмемо на select Country і виберемо якусь країну. 
    // Нажмемо на checkbox і потім на Subscribe. 
    // Перевірити, що є текст "Thanks...".

    // Четвертий тестовий випадок.
    // Зайти на https://github.com . 
    // Нажимаємо на "Search or jump to...", пишемо "act" і нажимаємо кнопку Enter
    // (метод keys), або нажимаємо кнопку нижче, яка висвітилась. 
    // Для метода keys потрібно імпортувати об'єкт Key з WebdriverIO package:
    // import { Key } from 'webdriverio'
    // https://webdriver.io/docs/api/browser/keys
    // Потрібно буде перевірити, що "act" є в одному з репозиторіїв карточок, 
    // що знайшлися. 

    // П'ятий тестовий випадок.
    // Зайти на https://github.com . 
    // Нажимаємо на гіперпосилання "Pricing", перевіряємо, що видно 
    // "Get the complete developer platform." 
    // Прокрутимо екран до гіперпосилання "Compare all features", нажмемо на неї і 
    // перевіримо, що тут є  заголовок "Compare features". 
    it("Home task 25. Checking the registration on the GitHub.", async () => {
        await browser.url('https://github.com');

        await GitHubMainPage.clickOnSignUp()
        await browser.pause(2000)

        await GitHubSignUpPage.waitUntilEmailIsExist()
        await browser.pause(2000)

        await expect(GitHubSignUpPage.welcome).toHaveTextContaining("Welcome to GitHub!")

        await GitHubSignUpPage.setEmailInput("email123@example.com")
        await GitHubSignUpPage.clickOnContinueToPassword()
        await GitHubSignUpPage.setPasswordInput("Password100qwert")
        await GitHubSignUpPage.clickOnContinueToUsername()
        await GitHubSignUpPage.setUsernameInput("git-user11")
        await GitHubSignUpPage.clickOnContinueToOpt()
        await GitHubSignUpPage.clickOnOptInput()
        await browser.pause(2000)
        await GitHubSignUpPage.clickOnContinueToSubmit()
        await browser.pause(5000)
    });

    it("Home task 25. Checking the Enterprise Plan page on the GitHub.", async () => {
        await browser.url('https://github.com');
        
        await GitHubMainPage.scrollToOver100million()
        await browser.pause(3000)

        await expect(GitHubMainPage.Over100millionHeader).toExist()
        await expect(GitHubMainPage.enterprisePlanHyperlink).toBeDisplayedInViewport()

        await GitHubMainPage.clickOnEnterprisePlan()
        await browser.pause(3000)
        
        await expect(GitHubEnterprisePlanPage.trialPlanHeader).toHaveTextContaining("Pick your trial plan")

        await GitHubEnterprisePlanPage.clickOnEnterpriseCloud()
        await browser.pause(3000)
    });

    it("Home task 25. Checking the Subscribe page on the GitHub.", async () => {
        await browser.url('https://github.com');
        
        await GitHubMainPage.scrollToSubscribe()
        await browser.pause(2000)

        await expect(GitHubMainPage.subscribeHyperlink).toHaveText("Subscribe")
        await expect(GitHubMainPage.subscribeHyperlink).toBeClickable()

        await GitHubMainPage.clickOnSubscribeHyperlink()
        await browser.pause(2000)

        await expect(browser).toHaveUrlContaining("https://resources.github.com")
        await expect(GitHubNewsletterPage.brandHeader).toHaveTextContaining("Subscribe to our developer newsletter")

        await GitHubNewsletterPage.setEmailInput("mail@example.com")
        await GitHubNewsletterPage.clickOnCountrySelect()
        await GitHubNewsletterPage.selectCountry()
        await GitHubNewsletterPage.clickOnMarketingCheckbox()
        await GitHubNewsletterPage.clickOnSubscribeButton()
        await browser.pause(2000)

        await expect(GitHubConfirmationPage.brandHeader).toHaveTextContaining("Thanks for subscribing!")
    });

    it("Home task 25. Checking the Search on the GitHub.", async () => {
        await browser.url('https://github.com');
        
        await GitHubMainPage.clickOnSearchButton()
        await GitHubMainPage.setSearchInput("action")
        await browser.pause(2000)
        // To use characters like "Left arrow" or "Back space", import the Key object from the WebdriverIO package.
        // https://webdriver.io/docs/api/browser/keys
        await browser.keys([Key.Enter])
        await browser.pause(5000)

        await expect(GitHubSearchPage.searchResults).toHaveTextContaining("action")
    });

    it("Home task 25. Checking the Pricing page on the GitHub.", async () => {
        await browser.url('https://github.com');
        
        await GitHubMainPage.clickOnPricing()
        await browser.pause(2000)

        await expect(GitHubPricingPage.Header1).toBeDisplayedInViewport()
        await expect(GitHubPricingPage.Header1).toHaveTextContaining("Get the complete developer")

        await GitHubPricingPage.scrollToCompareAllFeatures()
        await browser.pause(2000)
        await GitHubPricingPage.clickOnCompareAllFeatures()
        await browser.pause(3000)

        await expect(GitHubPricingPage.compareFeaturesHeader).toHaveTextContaining("Compare features")
    });
});
