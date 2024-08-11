require("dotenv").config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const PORT = process.env.PORT;
const PASSPHRASE = process.env.PASSPHRASE;
const JWT_SECRET = process.env.JWT_SECRET;

app.post('/pass-check', (req, res) => {
  const { passphrase } = req.body;

  if (passphrase === PASSPHRASE) {
    console.log("PASSPHRASE MATCHED");
    const token = jwt.sign({ authorized: true }, JWT_SECRET, {expiresIn: '1d'});
    res.status(200).json({ token });
  } else {
    console.log("PASSPHRASE MISMATCHED");
    res.status(401).json({ authorized: false});
  }
});

if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}
