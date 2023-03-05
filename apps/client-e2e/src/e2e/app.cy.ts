beforeEach(() => {
	cy.visit('/');
});

it('should all stuff', () => {
	cy.get('h4').contains('Central bank exchange rate fixing');
	// getPageTitle().contains('Central bank exchange rate fixing');
	// getConvertorForm().should('be.visible');
	// getTable().should('be.visible');
});
