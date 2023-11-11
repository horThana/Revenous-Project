import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

/// connect to .env file and axios to get data from yelp api

dotenv.config();

const app = express();
app.use(cors());

app.get('/api/search',async (req, res) => {
  const {term, locations , sortBY} = req.query;

  try{
      const response = await axios.get(
        'https://api.yelp.com/v3/businesses/search',
        {
          hearders: {
            Authorization: `Bearer ${process.env.API_KEY}`,
          },
          },
      );

      const data = await response.json();
      res.json(data);
  }catch(error){
    console.log(error)
    res.status(500).send.json('Server Error')
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
