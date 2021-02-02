const express = require('express');
const app = express();
const port = process.env.Port || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(port, () => {
    console.log(`Express web app available at localhost: ${port}`);
})
