// BDD style
beforeEach(() => {
  cy.visit('http://localhost:9487/pizza');
});

describe.skip('Order Pizza Page field naming', () => {
  it('Enter your detail field', () => {
    // 1. by class: <h1 class="page-header">Pizza Order</h1>
    cy.get('.page-header').contains('Pizza Order');

    // 2. by Id: <h2 id="detailTitleId">Enter your details</h2>
    cy.get('#detailTitleId').contains('Enter your details');

    // 3. by tag name: <h2>Enter your details</h2>
    cy.get('h2').should('contain', 'Enter your details');
    cy.get('form>h2').should('contain', 'Enter your details');

    // 4. by attribute name: <input formControlName="name" placeholder="Tissue Chu" />
    cy.get('[formControlName="name"]').should('be.visible');
    cy.get('[placeholder="Tissue Chu"]').type('yoyo');

    // 5. by data-*: <h2 data-test-id="detailTitle">Enter your details</h2>
    cy.get('[data-test-id="detailTitle"]').contains('Enter your details');
  });

  it('Choose your pizza field', () => {
    // 執行Test Case
    cy.get('app-pizza-creator>div>h2').should('contain', 'Choose your pizzas');
  });
});

// TDD style
context.skip('6. 練習 Interacting With Elements', () => {
  specify('Interacting With Elements', () => {
    cy.get('button')
      .contains('Add pizza')
      .click();

    cy.contains('Email')
      .next('input')
      .focus()
      .blur();
  });
});

describe.skip('7. element with relationship', () => {
  it('Within, root, children for form', () => {
    cy.get('form').within(() => {
      cy.get('input[type = "email"]')
        .first()
        .debug()
        .type('tissuesyo@gmail.com');

      cy.get('input[type = "email"]')
        .eq(1)
        .type('tissuesyo@gmail.com');

      cy.get('input[type = "text"]')
        .last()
        .type('09123456789');
    });
  });

  it('Within, root, children for table', () => {
    cy.contains('Seafood')
      .parent('tr')
      .within(() => {
        // all searches are automatically rooted to the found tr element
        cy.get('td')
          .eq(1)
          .contains('Shrimp, lobster');
        cy.get('td')
          .eq(2)
          .contains('button', 'Edit')
          .click();
      });
  });
});

describe.skip('8. then() and alias', () => {
  it('alias', () => {
    cy.get('form').within(() => {
      cy.get('input[type = "email"]').as('emailTf');

      cy.get('@emailTf')
        .first()
        .type('tissuesyo@gmail.com');

      cy.get('@emailTf')
        .eq(1)
        .type('123@gmail.com')
        .then(() => cy.debug());

      cy.contains('Emails must match');
    });
  });

  it('then', () => {
    cy.get('h2')
      .contains('Choose your pizzas')
      .children('button')
      .click()
      .then(() => {
        cy.contains('19.98');
      });

    cy.get('.pizza-summary__price')
      .first()
      .then($fav => {
        return $fav.text().trim();
      })
      .as('price');

    cy.get('@price').then($cnt => {
      expect($cnt).to.eq('$9.99');
    });
  });
});
