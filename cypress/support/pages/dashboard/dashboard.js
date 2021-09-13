class Dashboard {

    contractLink = 'Create A Contract';
    
        visit() {
            cy.visit("/create");
        }
    
        openCreateContractPage() {
            cy.contains(this.contractLink).click();
        }
    }
    
export default new Dashboard();