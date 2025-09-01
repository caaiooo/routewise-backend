require('dotenv').config();
const express = require('express');
const { Client } = require('@googlemaps/google-maps-services-js');

const app = express();
const port = 3000;

app.use(express.json());

const googleMapsClient = new Client({});

app.post('/route', async (req, res) => {
  const { origin, destination } = req.body;

  if (!origin || !destination) {
    return res.status(400).json({ error: 'Origin and destination are required' });
  }

  try {
    const response = await googleMapsClient.distancematrix({
      params: {
        origins: [origin],
        destinations: [destination],
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
    });

    const element = response.data.rows[0].elements[0];

    if (element.status === 'OK') {
      res.json({
        distance: element.distance,
        duration: element.duration,
      });
    } else {
      res.status(400).json({ error: 'Unable to calculate route' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
