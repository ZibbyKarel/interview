import { CurrencyConvertFormTestIds, TableTestIds } from '@momence-interview-nx/shared';

export const getPageTitle = () => cy.get('h1');

export const getConvertorForm = () => cy.get(`[data-testid="${CurrencyConvertFormTestIds.wrapper}"]`);

export const getTable = () => cy.get(`[data-testid="${TableTestIds.wrapper}"]`);
