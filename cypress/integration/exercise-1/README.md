# 練習 1: 建立一個 Cypress Testing project

1. 建立專案資料夾 `mkdir my-e2e-proj`

2. 在專案資料夾內(`cd my-e2e-proj`)，執行`npm init -y` or `npm init`

3. 設定Cypress安裝位置
   1. 請先下載好Cypress zip file([下載網址](https://download.cypress.io))或是使用監獄內部repository作為安裝位置
   2. 設定`CYPRESS_INSTALL_BINARY`位置<br />
   `set CYPRESS_INSTALL_BINARY=$your_folder_path/cypress.zip` or<br /> 
   `set CYPRESS_INSTALL_BINARY=https://your-company-repositoy/cypressPath/cypress.zip`

4. 安裝cypress `npm install --save-dev cypress`

5. 開啟project `package.json`，設定Cypress Script<br />
   增加開啟Cypress Test Runner指令
```json
"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "ng": "ng",
    "start": "ng serve",
  },
```

6. 在專案資料夾內，執行`npm run cypress:open`，即可成功開啟Cypress Test Runner
   
