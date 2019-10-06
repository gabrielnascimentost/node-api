const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//inicia o app
const app = express();
app.use(express.json());
app.use(cors());

//inicia o db
mongoose.connect(
    'mongodb://localhost:27017/rocketseat', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);
requireDir('./src/models');

//rotas
app.use('/api', require('./src/routes'));

app.listen(3001);