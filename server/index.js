import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Joi from 'joi';

const loginSchema = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});


const app = express();
app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/login', (req, res) => {
  const creds = req.body;

  Joi.validate(creds, loginSchema, {abortEarly:false}, (err, value) => {
    console.log(err);
  });

  if (creds.email === 'k@fung.com' && creds.password === 'kenny') {
    setTimeout(() => res.json({ token: 'some token from the server' }), 4000);
  } else {
    setTimeout(() => {
      res.status(401).json({ error: 'Email and/or password incorrect' });
    }, 4000);
  }
});

const port = 3001;
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
