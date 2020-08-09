import express from 'express';

const app = express();

app.use(express.json());

app.get('/users', (request, response) => {
    return response.send('hELLO')
});

const port = process.env.port || 3333;
app.listen(port);
console.log(`🚀 Server on port: http://localhost:${port}`);
