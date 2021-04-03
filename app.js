const express = require('express');
const db = require('./config/database');
const usersRoute = require('./routes/usersRoute');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('index');
});

app.use('/api/users', usersRoute);
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  db.authenticate()
    .then(() => {
      console.log('Database connected');
      console.log(`Server is running on PORT: ${PORT}`);
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
});
