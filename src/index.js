const express = require('express');

const cors = require('cors');

require('express-async-errors');

const app = express();

const middlewares = require('./middlewares');

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  app.use(cors());
  next();
});

app.use(require('./routes/index'));

app.use(middlewares.errorHandler);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
