/// <reference types="cypress" />

import data from "../fixtures/contracts.json"
import Login from "../support/pages/login/login";
import Dashboard from "../support/pages/dashboard/dashboard";
import Contracts from "../support/pages/contracts/contracts";
import ContractsCreation from "../support/pages/contracts/contracts-creation";

const apiUrl = Cypress.env('apiUrl');

context("ContractsCreation Tests", () => {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
        Login.visit();
        Login.doLogin();
    });

    it("Should create a 'Fixed Rate' contract", () => {
        //creating contract
        Dashboard.openCreateContractPage();
        Contracts.openContract('Fixed Rate');
        ContractsCreation.GeneralInfo(data.contractName, data.jobTitle, data.seniorityLevel, data.scopeOfWork);
        ContractsCreation.PaymentDetails(data.rate, data.currency, data.cycle, null, null);
        ContractsCreation.DefineDates();
        ContractsCreation.Extras(data.specialClause);
        ContractsCreation.Compliance(data.taxResidence, data.provinceResidence);
        //assertions
        cy.intercept('POST', `${apiUrl}/contracts`).as('contract');
        cy.wait('@contract').then((contract) => {
            expect(contract.response.statusCode).to.be.equal(201);
        });
        cy.get(ContractsCreation.contractTitle).should('contain.text', data.contractName);
    });

    it("Should create a 'Pay As You Go' contract", () => {
        //creating contract
        Dashboard.openCreateContractPage();
        Contracts.openContract('Pay As You Go');
        ContractsCreation.GeneralInfo(data.contractName, data.jobTitle, data.seniorityLevel, data.scopeOfWork);
        ContractsCreation.PaymentDetails(data.rate, data.currency, data.cycle, null, null);
        ContractsCreation.DefineDates();
        ContractsCreation.Extras(data.specialClause);
        ContractsCreation.Compliance(data.taxResidence, data.provinceResidence);
        //assertions
        cy.intercept('POST', `${apiUrl}/contracts`).as('contract');
        cy.wait('@contract').then((contract) => {
            expect(contract.response.statusCode).to.be.equal(201);
        });
        cy.get(ContractsCreation.contractTitle).should('contain.text', data.contractName);
    });

    it("Should create a 'Milestone' contract", () => {
        //creating contract
        Dashboard.openCreateContractPage();
        Contracts.openContract('Milestone');
        ContractsCreation.GeneralInfo(data.contractName, null, null, data.scopeOfWork);
        ContractsCreation.PaymentDetails(null, data.currency, null, data.milestoneDescription, data.rate);
        ContractsCreation.Extras(data.specialClause);
        ContractsCreation.Compliance(data.taxResidence, data.provinceResidence);
        //assertions
        cy.intercept('POST', `${apiUrl}/contracts`).as('contract');
        cy.wait('@contract').then((contract) => {
            expect(contract.response.statusCode).to.be.equal(201);
        });
        cy.get(ContractsCreation.contractTitle).should('contain.text', data.contractName);
    });
});