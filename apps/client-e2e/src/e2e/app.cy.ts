import { getConvertedAmount, getConvertorForm, getCZKInput, getPageTitle, getTable } from '../support/app.po';

beforeEach(() => {
	cy.visit('/');
	cy.intercept('GET', '/api/rates', { fixture: 'rates.json' }).as('rates');
	cy.wait('@rates');
});

it('displays all components', () => {
	getPageTitle().contains('Central bank exchange rate fixing');
	getConvertorForm().should('be.visible');
	getTable().should('be.visible');

	// check default calculated value
	getConvertedAmount().contains('0.00');
});

it('user can calculate in form', () => {
	getCZKInput().type('100');
	getConvertedAmount().contains('6.69');
});
