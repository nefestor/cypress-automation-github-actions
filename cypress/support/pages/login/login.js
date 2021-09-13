class LoginPage {

loginInput = 'input[name=email]';
passwordInput = 'input[name=password]';
submitFormButton = 'button[type=submit]';

    visit() {
        cy.visit("/login");
    }

    doLogin() {
        cy.get(this.loginInput).type(Cypress.env('email'));
        cy.get(this.passwordInput).type(Cypress.env('password'), {log: false}); //password is set on CLI, like: CYPRESS_password=secret npx cypress run
        cy.get(this.submitFormButton).click();
    }
}

export default new LoginPage();