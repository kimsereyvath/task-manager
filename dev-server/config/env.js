import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';

export function setEnvironment(app) {
    if (process.env.NODE_ENV !== 'production') {
        setDevEnv(app);
    } else {
        setProdEnv(app);
    }
}

function setDevEnv(app) {
    process.env.NODE_ENV = 'development';
    process.env.DB_URL = 'mongodb://localhost:27017/vue-db';
    process.env.TOKEN_SECRET = 'my-development-secret'; //should be more complex
    app.use(bodyParser.json());
    app.use(morgan('dev'));
    app.use(cors());
}

const __dirname = path.resolve();
function setProdEnv(app) {
    process.env.DB_URL = 'mongodb+srv://arikosaka:VqECQvOyewCsGvML@vue-db.gf1w8.mongodb.net/vue-db?retryWrites=true&w=majority';//'mongodb://localhost:27017/prod-db';
    process.env.TOKEN_SECRET = 'my-production-secret'; //should be more complex
    app.use(bodyParser.json());
    //app.use(express.static(__dirname + '/../dist'));
    app.use(express.static(__dirname + '/../../dist'));
}
