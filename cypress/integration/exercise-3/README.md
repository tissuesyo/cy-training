# 練習 3: Assertion

1.

```typescript
// retry until we find 3 matching <li.selected>
cy.get('li.selected').should('have.length', 3);
// retry until this input does not have class disabled
cy.get('form')
  .find('input')
  .should('not.have.class', 'disabled');
// retry until this textarea has the correct value
cy.get('textarea').should('have.value', 'foo bar baz');
// retry until this span does not contain 'click me'
cy.get('a')
  .parent('span.help')
  .should('not.contain', 'click me');
// retry until loading spinner no longer exists
cy.get('#loading').should('not.exist');
// retry until our radio is checked
cy.get(':radio').should('be.checked');
// retry until .completed has matching css
cy.get('.completed').should('have.css', 'text-decoration', 'line-through');
// retry until .accordion css have display: none
cy.get('#accordion').should('not.have.css', 'display', 'none');
```
