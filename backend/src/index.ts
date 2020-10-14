import express from 'express';
const app = express();
import './database/connection';

import routes from './routes';

const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(routes);

app.listen(PORT);