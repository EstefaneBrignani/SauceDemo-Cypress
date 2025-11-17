🚀Testes Automatizados com Cypress – SauceDemo

Bem-vindo ao repositório de testes end-to-end utilizando Cypress para validar funcionalidades do site SauceDemo. Este projeto possui cenários completos de Login, Carrinho e Checkout, além de uma documentação rica para facilitar manutenção, contribuição e CI/CD.


📌 Tecnologias Utilizadas

Cypress 10+

Node.js LTS

JavaScript

Git + GitHub

GitHub Actions (opcional para CI/CD)



📁 Estrutura Completa do Projeto
project/
│── cypress/
│ ├── e2e/
│ │ └── saucedemo.cy.js
│ ├── fixtures/
│ ├── support/
│── node_modules/
│── package.json
│── package-lock.json
│── README.md



🧪 Cenários de Teste Implementados

🔐 Cenário 01 – Login

✔️ Login com credenciais válidas

✔️ Login com username inválido

✔️ Login com senha inválida

✔️ Login com username vazio

✔️ Login com senha vazia

🛒 Cenário 02 – Carrinho (Add to Cart)

✔️ Adicionar item ao carrinho

✔️ Remover item do carrinho

💳 Cenário 03 – Checkout

✔️ Fluxo de checkout completo com sucesso




🎥 Vídeos dos Testes

O Cypress grava automaticamente vídeos das execuções em modo headless. Você pode encontrá-los em:

/cypress/videos

Exemplos:

Fluxo de login bem-sucedido

Fluxo de Produtos adicionados e removidos do carrinho

Fluxo de checkout completo

