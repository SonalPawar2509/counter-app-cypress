import { expect } from 'chai';

const getCounter = () => cy.get('[data-cy=counter]');
const clickIncrement = () => cy.get('[data-cy=increment]').click();
const clickDecrement = () => cy.get('[data-cy=decrement]').click();

describe('Counter E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('TC1: increments counter on click', () => {
    clickIncrement();
    getCounter().should('have.text', '1');
  });

  it('TC2: does not decrement below zero', () => {
    clickDecrement();
    getCounter().should('have.text', '0');
  });

  it('TC3: prevents negative values', () => {
    getCounter().should('have.text', '0');
    clickDecrement();
    getCounter().should('have.text', '0');
  });

  it('TC4: increments 5 times', () => {
    for (let i = 0; i < 5; i++) clickIncrement();
    getCounter().should('have.text', '5');
  });

  it('TC5: increment then decrement returns to 0', () => {
    clickIncrement();
    clickDecrement();
    getCounter().should('have.text', '0');
  });

  it('TC6: On page reload, the counter should be 0', () => {
    clickIncrement();
    getCounter().should('have.text', '1');
    cy.reload();
    getCounter().should('have.text', '0');
  });
}); 