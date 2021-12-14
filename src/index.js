// index.js
// This is the main entry point of our application
// index.js
// This is the main entry point of our application
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

const app = express();

// запускаем сервер на порте, указанном в файле .env, или на порте 7000
const port = process.env.PORT || 7000;

app.get('/', (reg, res) => {
  res.send('Hello World!');
});
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

