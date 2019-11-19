# 練習 4: Mock service

1. 藉由[Json Server](https://docs.cypress.io/api/commands/visit.html#Syntax)來模擬 Restful API 回傳的結果
   1. 在 cmd 當中開啟 json-server 資料夾 `cd json-server`
   2. 執行`json-server db.json`
      1. 如果執行`json-server`指令沒辦法成功起 server, 可重新安裝 json server lib
      2. 語法為 `npm install json-server --save-dev` or 裝在 global env 也非常方便`npm install json-server -g`

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
