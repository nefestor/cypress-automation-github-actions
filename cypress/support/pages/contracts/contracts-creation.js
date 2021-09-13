class ContractsCreationPage {

    contractNameInput = 'input[name=name]';
    jobTitleInput = 'input[name=jobTitle]';
    firstJobSuggestion = '.suggestions-option';
    seniorityDropdown = '[data-qa=selector-seniority-level]';
    scopeOfWorkInput = 'textarea[name=scope]';
    startDateCalendar = '.calendar-input';
    nextButton = 'button[type=submit]';
    alternativeNextButton = 'next';
    rateInput = 'input[name=rate]';
    currencyInput = '[data-qa=currency-select]';
    cycleSelect = '[data-qa=cycle-select]';
    specialClauseButton = '[data-qa=special-clause-card] button';
    specialClauseTextarea = '[data-qa=special-clause-card] textarea';
    contractorTaxResidenceDropdown = '[data-qa=contractor-tax-residence]';
    contractorTaxResidenceProvinceDropdown = '[data-qa=contractor-tax-residence-province]';
    createContractButton = 'create contract';
    contractTitle = 'h1';
    milestoneDescriptionInput = '[data-qa=milestone-description]';
    milestoneAmountInput = '[data-qa=milestone-amount]';

    visit() {
        cy.visit("/create/fixed");
    }
    
    GeneralInfo(name, jobTitle, seniority, scopeOfWork) {
        if(name) cy.get(this.contractNameInput).type(name);
        if(jobTitle) {
            cy.get(this.jobTitleInput).type(jobTitle);
            cy.get(this.firstJobSuggestion).click();
        }
        if(seniority) cy.get(this.seniorityDropdown).type(seniority);
        if(scopeOfWork) cy.get(this.scopeOfWorkInput).type(scopeOfWork);
        cy.get(this.startDateCalendar).click().then(() => {
            var today = new Date().getDate();
            cy.contains(today - 1).click();
        });
        cy.contains(this.alternativeNextButton).click();
    }

    PaymentDetails(rate, currency, cycle, milestoneDescription, milestoneAmount) {
        if(rate) cy.get(this.rateInput).type(rate);
        if(currency) cy.get(this.currencyInput).type(currency);
        if(cycle) cy.get(this.cycleSelect).type(cycle);
        if(milestoneDescription) cy.get(this.milestoneDescriptionInput).type(milestoneDescription);
        if(milestoneAmount) cy.get(this.milestoneAmountInput).type(milestoneAmount);
        cy.contains(this.alternativeNextButton).click();
    }

    DefineDates() {
        cy.contains(this.alternativeNextButton).click();
    }

    Extras(specialClause) {
        if(specialClause) { 
            cy.get(this.specialClauseButton).click();
            cy.get(this.specialClauseTextarea).type(specialClause);
        }
        cy.contains(this.alternativeNextButton).click();
    }

    Compliance(taxResidence, provinceResidence) {
        if(taxResidence) cy.get(this.contractorTaxResidenceDropdown).type(taxResidence);
        if(provinceResidence) cy.get(this.contractorTaxResidenceProvinceDropdown).type(provinceResidence);
        cy.contains(this.createContractButton).click();
    }
}

export default new ContractsCreationPage();