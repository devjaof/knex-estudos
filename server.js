const express = require('express');

const app = express();
const routes = require('./routes');

app.use(express.json())
app.use(routes);


// catch all
app.use((error, req, res, next) => {
    console.error("middleware error --->", error)
    res.status(error.status || 500);
    res.json(error.message);
})

app.listen(7071, () => {
    console.log("server rodando sem probleminhas na porta 7071")
});