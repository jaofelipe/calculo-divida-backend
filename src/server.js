const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());


app.use(routes);

app.listen(process.env.PORT || 3000);
console.log(`Listening to port ${process.env.PORT || 3000}`);