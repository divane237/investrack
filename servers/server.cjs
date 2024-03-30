const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

// Enable CORS all routes
app.use(cors());

app.get('/api', (req, res, next) => {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;

  axios
    .request({
      method: 'get',
      maxBodyLength: Infinity,
      json: true,
      url: url,
      params: {
        start: 1,
        limit: 50,
      },
      headers: {
        'X-CMC_PRO_API_KEY': process.env.API_KEY,
      },
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send('Error fetching crypto data');
      console.error(error);
    });
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
