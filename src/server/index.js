const combiner = require("./routes/funCombiner");
const connection = require("./db");
const express = require("express");
const app = express();

connection();
// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");

    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

app.use(express.json());

app.use("/api", combiner);




const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
