const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('Hello World!')
    next();
})

app.post('/save-user', (req, res, next) => {
    console.log('here we has request-body', req.body);
    res.sendStatus(200);
    next();
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})