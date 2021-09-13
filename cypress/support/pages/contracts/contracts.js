class ContractsPage {

    fixedContract = 'Fixed Rate';
    payAsYouGo = 'Pay As You Go';
    Milestone = 'Milestone';
    
        visit() {
            cy.visit("/create");
        }
    
        openContract(contractType) {
            cy.contains(contractType).click();
        }
    }
    
export default new ContractsPage();