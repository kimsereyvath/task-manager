//const express = require('express')
import express from 'express'
const app = express()
const port = 3000
import {registerRoute} from './routes.js'
import {setEnvironment} from './config/env.js';
import {connectToDB} from './config/db.js';
import path from 'path';

setEnvironment(app);
connectToDB();
registerRoute(app);
const __dirname = path.resolve();
app.get('/', (req, res) => {
  if (process.env.NODE_ENV !== 'production') {
    return res.send('Running server in development mode.');
  } else {
    return res.sendFile('index.html', {root: __dirname + '/dist'});
    //return res.sendFile('index.html', {root: __dirname + '/../dist'});
  }
});

app.listen(port, () => {
  console.log(`Sereyvath's app listening at http://localhost:${port} in ` + process.env.NODE_ENV + ' mode!');
});