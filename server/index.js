const express = require('express');
const app = express();
const PORT = 3000;

app.get( '/testServer', (req, res)=> {
    res.statusCode(200);
});

app.get('/', (res, req)=> {
    res.statusCode(200);
});

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT )
});