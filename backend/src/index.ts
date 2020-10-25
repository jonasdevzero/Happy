import 'dotenv/config';
import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';
import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

const PORT = process.env.PORT || 3001;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://happy-devzero.netlify.app");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "*")
    app.use(cors());
    next();
});
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(PORT);