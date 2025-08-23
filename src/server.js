require('dotenv').config();
const express = require('express'); //commonjs
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express(); //app express
const port = process.env.PORT; //port
const hostname = process.env.HOSTNAME;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//config template engine
configViewEngine(app);

// khai bao routes
app.use('/', webRoutes);



connection.query(
  'SELECT * FROM Users u',
  function (err, results, fields) {
    // console.log("results: ", results);
    // console.log("fields: " ,fields);
  }
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});