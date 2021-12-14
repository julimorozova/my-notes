// index.js
// This is the main entry point of our application
// index.js
// This is the main entry point of our application
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// запускаем сервер на порте, указанном в файле .env, или на порте 7000
const port = process.env.PORT || 7000;

// Построение схемы с использованием языка схем GraphQL
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Представляем функцию разрешения для полей схемы
const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}
const app = express();

// Настройка ApolloServer
const server = new ApolloServer({ typeDefs, resolvers});

// Применяем промежуточное ПО Apollo GraphQL и указываем путь к /api
server.applyMiddleware({ app, path: '/'});

app.get('/', (reg, res) => {
  res.send('Hello World!');
});
app.listen(port, () => {
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
});

