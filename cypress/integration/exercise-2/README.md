# 練習 2: 建立 Test Suite and Test case

1. 新增測試檔案 `exercise2.spec.ts`，檔名用 spec 是用來表測試檔案的慣例

2. 新增 test suite and test case (snippet: `describeAndIt` or `contextAndIt`)

```typescript
// BDD style
describe('描述這個test suite', () => {
  it(('描述這個test case') => {});
});

// TDD style
context('描述這個test suite', () => {
  specify('描述這個test case', () => {});
});
```

3. 練習 hook - `before`, `beforeEach`, `after`, and `afterEach`
   1. 利用 before hook，在跑所有 test case 之前去到某個頁面 (snippet: `before`)
   2. 利用[visit](https://docs.cypress.io/api/commands/visit.html#Syntax)，到訂 Pizza 畫面，`cy.visit('http://localhost:9487/pizza')`

```typescript
  before(('visit page') => {
      cy.visit('http://localhost:9487/pizza');
  });
```

4. 練習 `cy.contain()`
   1. contain: Get the DOM element containing the text
   2. 語法 - `cy.contain('DOM text')`
   3. 驗證畫面 Enter your details 區塊欄位 label 有出現: `Name`, `Email`, `Confirm Email`...欄位

```typescript
it('Enter your detail field', () => {
  cy.contains('Name');
});
```

_好的，先暫停一下下_

---

5. 練習 `cy.get()`
   1. get: Get one or more DOM elements by selector or alias
   2. 語法 - `cy.get(selector)` or `cy.get(alias)`
   3. 請利用下列各種方式來找到 element (HTML: pizza-form.component.html)
      1. 利用 id 方式，驗證 page title 包含"Pizza Order"
      2. 利用 class name 方式，驗證 page title 包含"Pizza Order"
      3. 利用 HTML tag 方式，驗證 page title 包含"Pizza Order"
      4. 利用 HTML attribute - placeholder='name'方式拿到欄位，填入(`.type()`)你的名字
      5. 利用 data-\* 方式， 驗證 page title 包含"Pizza Order"

```typescript
it('Enter your detail field', () => {
  cy.get('.id').contains('OOXX');
  cy.get('#class').contains('OOXX');
  cy.get('h1').should('contain', 'OOXX');
  cy.get('[formControlName="email"]').should('be.visible');
  cy.get('[placeholder="0912 1108 77"]').type('OOXX');
  cy.get('[data-test-id="detailTitle"]').contains('OOXX');
});
```

6. 練習 Interacting With Elements

   1. 新增一個 test case, `it('Interacting With Elements practice')`
   2. trigger [Add pizza] button click event - `.click()`
   3. 先 focus 在 [Email] field, 然後再 trigger blur() event - `.focus()` and `.blur()`
   4. clear [Name] 欄位 - `.clear()`

_應該有發現畫面上再經過這些 event 有些變化，exercise 3 會學怎麼驗證囉_

_好的，先暫停一下下_

---

7. 練習`.within, .children, .parent, .root .parentsUtil, .slibling, .prev, .next`
   1. 新增一個 test case, `it('Element with relationship')`
   2. 畫面最下方有個 Recipe Reference Table
      1. 透過 [Seafood] td 欄位，當作出發點，驗證那一 row 的資料為 'Seafood', 'Shrimp, lobster', 'Edit' button

```typescript
cy.contains('Seafood')
  .parent('tr')
  .within(() => {
    cy.get('td')
      .eq(1)
      .contains('OOXX');
    cy.get('td')
      .eq(2)
      .contains('button', 'Edit')
      .click();
  });
```

8. 練習`then()` and `alias()`
   1. 新增一個 test case, `it('then, alias')`
   2. `透過class name='pizza-summary__price'`取得元件後
      1. 取得第一個價格並 trim 掉多餘的字元並取別名為`firstPrice`
      2. 驗證 firstPrice 價格為\$9.99

```typescript
cy.get('.pizza-summary__price')
  .first()
  .then($fav => {
    return $fav.text().trim();
  })
  .as('firstPrice');

cy.get('@firstPrice').then($cnt => {
  expect($cnt).to.eq('$9.99');
});
```
