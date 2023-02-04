import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/api/users', (req, res) => {
  const userData = req.body;
  console.log(userData);
});
app.listen(5000);
