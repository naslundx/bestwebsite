const express = require('express');
const app = express();

app.get('/secret', (req, res) => {
    res.writeHead(200);
    res.end("Hello");
})

app.use(express.static('public'))

app.listen(process.env.PORT);
