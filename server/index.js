import express from 'express';

const app = express();

app.post('login', (res, req) => {
  console.log(JSON.stringify(res));
  setTimeout(() => req.send('login call from server'), 3000);
});

var port = 3001;
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
