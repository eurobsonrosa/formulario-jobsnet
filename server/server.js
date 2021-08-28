const express = require('express');

const mongoose = require('mongoose');
require('dotenv').config();
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const cors =  require('cors');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@candidatos.rybbm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(cors());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen('5000', () => {
    console.log('conectado na porta 5000');
});