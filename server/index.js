import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/login', (req, res) => {
  setTimeout(() => res.json({ token: 'some token from the server' }), 4000);
  // setTimeout(() => {
  //  res.status(401).json({ error: 'ERROR!!! ERR!!!' });
  // }, 4000);
});

const port = 3001;
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
