const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'EXAMPLE API DATA' });
});

// log your server is running and the port
app.listen(port, () => console.log(`Listening on port ${port}`));