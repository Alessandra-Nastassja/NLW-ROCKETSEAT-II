import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors);

const port = process.env.port || 3333;
app.listen(port);
console.log(`🚀 Server on port: http://localhost:${port}`);
