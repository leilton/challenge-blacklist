# challenge-blacklist
Desafio Nodejs para Supero - listagem de clientes inadimplentes.

## Ferramentas

- Express
- MongoDB
- Mongoose
- Datatables
- Faker

# Estrutura da API

Todo o código da API se encontra na pasta `./src`:

### Rotas

As requisições dos clientes são recebidas aqui, todas as rotas da aplicação são importadas no arquivo `./src/routes/client.routes.ts`. 

### Controllers

Possui uma única chamada get para listar os clientes inadimplentes

## Instruções para rodar

Após clonar o repositório exceute `npm i` para instalar todas as dependências.
**É necessário ter o node instalado, tenha a última versão LTS**

Após criar a base de dados e iniciá-la, crie o arquivo `.env` a partir do arquivo `.env.example` e preencha os dados referente ao banco de dados.

### Rode a API

Agora que o BD está criado e as dependências instaladas, rode `npm run dev` para rodar a API, e veja o link para acessar no console

- Ao acessar o link, não haverá dados a serem mostrados, com isso será gerado uma quantidade de clients a ser definida no `.env` de registros em `QTD_FAKER`