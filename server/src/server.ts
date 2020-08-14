import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log(">>>>>>>>> Route access <<<<<<<<<<");

  return res.json('Hello Bátima: 0:56:00');
});

app.listen(3333);