## SOBRE O PROJETO

Este projeto é parte do Hackathon de setembro de 2023 dos alunos da TripleTen.

O produto se destina a pessoas em São Paulo que se sentem inseguras de ir para bairros que não conhecem. O nosso maior público-alvo será visitantes que não conhecem a cidade.

### COMO FUNCIONA?

O usuário só precisa inserir a região e bairro onde deseja ir e o aplicativo retornará com um 'score de segurança' que vai de 0 a 10, sendo 10 o mais seguro. Na mesma página o aplicativo recomendará outros bairros mais seguros dentro da região selecionada, caso o bairro que ele tenha escolhido não esteja nos 3 mais seguros da região.

Caso o usuário queira saber mais detalhes sobre os tipos de ocorrência no bairro selecionado, ele poderá clicar no botão 'mais detalhes' que levará ele aos dados requisitados.

### Futuras Implementações

1. Adicionar a funcionalidade de enviar uma ocorrência para alimentar nosso banco de dados.
2. Adicionar dia da semana e horário ao banco de dados para que o aplicativo possa retornar dados mais específicos sobre dia e horário.
3. Estender o projeto para outras cidades

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
