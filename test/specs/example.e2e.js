const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should logout and verify logout alert message', async ()=>{
         //bec we have pom these elements in its resoective pages const btnLogout=$('a[href="/logout"]') // find element
         //const flashAlert=$('#flash');

        await SecurePage.btnLogout.click();

        await expect(SecurePage.flashAlert).toHaveTextContaining("You logged out of the secure area!");
    })
});


