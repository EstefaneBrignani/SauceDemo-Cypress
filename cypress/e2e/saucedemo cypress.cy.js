
describe('Cenario 01 Login', () => {


    // Caso Teste 01
    it('Login com credenciais validas', () => {
    // Dado que o usuario esta na página de login 
    cy.visit('https://www.saucedemo.com');
    cy.wait(2000)

    //Quando o usuario preenche o campo de "usuário" com "standard_user"
    cy.get('[data-test="username"]').type('standard_user');
    cy.wait(2000)

    //E o usuario preenche o campo de "senha" com "secret_sauce"
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.wait(2000)

    //E o usuario clica no botão "login"
    cy.get('#login-button').click();
    cy.wait(2000)

    //Então o usuário deve ser direcionado para a página de produtos 
    cy.url().should('eq','https://www.saucedemo.com/inventory.html');
    cy.wait(2000)
    })



    // Caso Teste 02
    it('Login com username invalido', () => {
    // Dado que o usuario esta na página de login 
    cy.visit('https://www.saucedemo.com');
    
    cy.wait(2000)

    //Quando o usuario preenche o campo de "usuário" com username invalida
    cy.get('[data-test="username"]').type('standard');
    cy.wait(2000)

    //E o usuario preenche o campo de "senha" com "secret_sauce"
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.wait(2000)

    //E o usuario clica no botão "login"
    cy.get('#login-button').click();
    cy.wait(2000)

    //Então o usuário deve ver a mensagem de erro e permanecer na pagina
    cy.url().should('eq','https://www.saucedemo.com/');
    cy.wait(2000)
    })

    

    // Caso Teste 03
    it('Login com senha invalida', () => {
    // Dado que o usuario esta na página de login 
    cy.visit('https://www.saucedemo.com');
    cy.wait(2000)

    //Quando o usuario preenche o campo de "usuário" com "standard_user"
    cy.get('[data-test="username"]').type('standard_user');
    cy.wait(2000)

    //E o usuario preenche o campo de "senha" com senha invalida
    cy.get('[data-test="password"]').type('secret');
    cy.wait(2000)

    //E o usuario clica no botão "login"
    cy.get('#login-button').click();
    cy.wait(2000)

    //Então o usuário deve ver a mensagem de erro e permanecer na pagina
    cy.url().should('eq','https://www.saucedemo.com/');
    cy.wait(2000)
    })

 

    // Caso Teste 04
    it('Login com username vazio', () => {
    // Dado que o usuario esta na página de login 
    cy.visit('https://www.saucedemo.com');
    cy.wait(2000)

    //Quando o usuario nao preenche o campo de "usuário" 
    
    //E o usuario preenche o campo de "senha" com "secret_sauce"
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.wait(2000)

    //E o usuario clica no botão "login"
    cy.get('#login-button').click();
    cy.wait(2000)

    //Então o usuário deve ver a mensagem de erro e permanecer na pagina
    cy.url().should('eq','https://www.saucedemo.com/');
    cy.wait(2000)
    })


    
    // Caso Teste 05
    it('Login com senha vazia', () => {
    // Dado que o usuario esta na página de login 
    cy.visit('https://www.saucedemo.com');
    cy.wait(2000)

    //Quando o usuario preenche o campo de "usuário" com "standard_user"
    cy.get('[data-test="username"]').type('standard_user');
    cy.wait(2000)

    //E o usuario nao preenche o campo de "senha" 
  
    //E o usuario clica no botão "login"
    cy.get('#login-button').click();
    cy.wait(2000)

    //Então o usuário deve ver a mensagem de erro e permanecer na pagina
    cy.url().should('eq','https://www.saucedemo.com/');
    cy.wait(2000)
    })
})





describe('Cenario 02 AddToCard', () => {


  beforeEach(() => {
    // Dado que o usuario esta na página de login
    cy.visit('https://www.saucedemo.com/');
    //Quando o usuario preenche o campo de "usuário" com "standard_user"
    cy.get('[data-test="username"]').type('standard_user');
    //E o usuario preenche o campo de "senha" com "secret_sauce"
    cy.get('[data-test="password"]').type('secret_sauce');
    //E o usuario clica no botão "login"
    cy.get('[data-test="login-button"]').click();
    //Então o usuário deve ser direcionado para a página de produtos 
    cy.url().should('include', '/inventory.html');
  });


    // Caso Teste 01
    it('Adicionar um item ao carrinho', () => {

    //Quando o usuario clicar no botao do primeiro item
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(2000)

    //E o usuario clicar no icone carrinho de compras
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.wait(2000)


    //Então o usuário deve ser direcionado para a página de Cart e visualizar o item adicionado no carrinho
    cy.url().should('eq','https://www.saucedemo.com/cart.html');
    cy.wait(2000)

    })


    // Caso Teste 02
    it('Remover um item ao carrinho', () => {
    

    //Quando o usuario clicar no botao do primeiro item
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(2000)

    //E o usuario clicar no botao remove
    cy.get('.btn_secondary').click();
    cy.wait(2000)

    //E o usuario clicar no icone carrinho de compras
    cy.get('#shopping_cart_container').click();
    cy.wait(2000)


    //Então o usuário deve ser direcionado para a página de Cart e nao visualizar o item no carrinho
    cy.url().should('eq','https://www.saucedemo.com/cart.html');
    cy.wait(2000)

    
    })


})


describe('Cenario 03 Checkout', () => {

  beforeEach(() => {
    // Dado que o usuario esta na página de login
    cy.visit('https://www.saucedemo.com/');
    //Quando o usuario preenche o campo de "usuário" com "standard_user"
    cy.get('[data-test="username"]').type('standard_user');
    //E o usuario preenche o campo de "senha" com "secret_sauce"
    cy.get('[data-test="password"]').type('secret_sauce');
    //E o usuario clica no botão "login"
    cy.get('[data-test="login-button"]').click();
    //Então o usuário deve ser direcionado para a página de produtos 
    cy.url().should('include', '/inventory.html');
  });


    // Caso Teste 01
    it('Checkout com sucesso', () => {

    //Quando o usuario clicar no botao do primeiro item
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.wait(2000)

    //E o usuario clicar no icone carrinho de compras
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.wait(2000)


    //E o usuário for redirecionado para a página de Cart 
    cy.url().should('eq','https://www.saucedemo.com/cart.html');
    cy.wait(2000)

    //E o usuario clicar no botao checkout
    cy.get('.btn_action').click();

    //E o usuario preencher o campo 'first name' com 'Teste'
    cy.get('[data-test="firstName"]').type('Teste')

    //E o usuario preencher o campo 'first name' com '123456'
    cy.get('[data-test="lastName"]').type('123456')

    //E o usuario preencher o campo 'postal code' '654321'
    cy.get('[data-test="postalCode"]').type('654321')

    //E o usuario clicar no botao continue
    cy.get('.btn_primary').click()

    //E o usuário fot redirecionado para a página de resumo do pedido
    cy.url().should('eq','https://www.saucedemo.com/checkout-step-two.html');
    cy.wait(2000)

    //E o usuario clicar no botao finish
    cy.get('.btn_action').click()

    //E o usuário fot redirecionado para a página final e visualizar a mensagem 'THANK YOU FOR YOUR ORDER'
    cy.url().should('eq','https://www.saucedemo.com/checkout-complete.html');
    
    
  
    
    })

})
