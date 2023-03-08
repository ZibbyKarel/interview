// for some reason in this generated project structure cannot be used alias @momence-interview-nx/shared
// TODO: investigate why?
// eslint-disable-next-line
import { CurrencyConvertFormTestIds, RatesPageTestIds, TableTestIds } from '../../../../libs/shared/src/lib/testIds';

export const getPageTitle = () => cy.get('h4');

export const getConvertorForm = () => cy.get(`[data-testid="${CurrencyConvertFormTestIds.wrapper}"]`);

export const getTable = () => cy.get(`[data-testid="${TableTestIds.wrapper}"]`);

export const getCZKInput = () => cy.get(`[data-testid="${CurrencyConvertFormTestIds.amountInput}"] input`);

export const getConvertedAmount = () => cy.get(`[data-testid="${CurrencyConvertFormTestIds.convertedAmount}"]`);
