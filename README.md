# Entrega desafio

## 🚀 Instalação

Para executar este projeto localmente, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/en/) (Versão 20.x LTS ou no mínimo 18.x)
- NPM (gerenciador de pacotes padrão do Node)

1. Clone o repositório:

```bash
git clone [https://github.com/CaiquePrado/saucedemo-ui-test.git](https://github.com/CaiquePrado/saucedemo-ui-test.git)
```

2. Acesse a pasta do projeto:

```bash
cd saucedemo-ui-test
```

3. Instale as dependências:

```bash
npm install
```

## ▶️ Como executar os testes

Você pode executar os testes de duas maneiras: utilizando a interface gráfica do Cypress ou rodando em segundo plano pelo terminal.

**Para abrir a Interface Gráfica (Modo Interativo):**
Ideal para ver os testes rodando passo a passo no navegador.

```bash
npx cypress open
```

```bash
npx cypress run
```

## 🛠️ Tecnologias Utilizadas

- **Cypress:** Framework principal para os testes E2E.
- **TypeScript:** Utilizado para garantir tipagem estática, auto-complete avançado e maior confiabilidade na manutenção dos testes.
- **Page Object Model (POM):** Padrão de arquitetura adotado para separar a estrutura da página (seletores HTML) da lógica de testes, facilitando a manutenção e a reutilização.
- **Custom Commands Cypress:** Criação de comandos customizados para abstrair ações repetitivas, como o login e a adição de produtos ao carrinho.
