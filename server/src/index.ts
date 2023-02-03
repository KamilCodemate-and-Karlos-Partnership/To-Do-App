import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.json({ status: 'OK', data: 'randomData' });
});
app.listen(5000);
