# Express React App
## Create Express Backend API
### 1. Create Basic Express API
Begin by creating the `express_react_app` root folder and inside this folder create `server.js`.<br />
If you use Git, create a `.gitignore` file from [Official Gitignore for Node](https://github.com/github/gitignore/blob/master/Node.gitignore) to ignore uploading files such as `node_modules` to Git.<br />
Create `package.json` and accept all default values using enter key, then finally select `yes`:
```
npm init
```
Install `Express` as our web application framework:
```
npm install --save express
```
Inside `server.js` let\'s create a basic API:
```
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'EXAMPLE API DATA' });
});

// log your server is running and the port
app.listen(port, () => console.log(`Listening on port ${port}`));
```
In terminal, start your server:
```
npm start
```
In a browser direct to [http://localhost:5001/api](http://localhost:5001/api) to view your basic API.<br />

### 2. Call Watson Tone Analyzer From Express
Create a Watson Tone Analyzer service on the [IBM Cloud](https://www.ibm.com/cloud/).<br />
Create a `.env` environments file to store your Watson Tone Analyzer service credentials:
```
IAM_API_KEY=<ENTER_YOUR_API_KEY_HERE>
IAM_API_URL=<ENTER_YOUR_API_URL_HERE>
```
Install `dotenv` to facilitate loading environment variables from our `.env` file into `process.env`:
```
npm install --save dotenv
```
At the top of `server.js` require and configure `dotenv`:
```
require('dotenv').config();
```
Install `watson-developer-cloud` SDK to facilitate communication with Watson APIs. We will specifically call Watson Tone Analyzer:
```
npm install --save watson-developer-cloud
```
Update `server.js` to require and configure [Tone Analyzer](https://cloud.ibm.com/docs/services/tone-analyzer?topic=tone-analyzer-gettingStarted#gettingStarted) directly after the port number has been set:
```
const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');
const toneAnalyzer = new ToneAnalyzerV3({
  version: '2017-09-21',
  iam_apikey: process.env.IAM_API_KEY,
  url: process.env.IAM_API_URL
});
```
Add the following below the Tone Analyzer require and configure, so that Express can parse the JSON response from the Watson service:
```
app.use(express.json());
```
Update the GET route to listen to `/tone` and use the async/await feature of ES8 to send the request to the Watson service and a try/catch to handle any response errors:
```
// create a GET route
app.get('/tone', async (req, res) => {
  let parameters = {
    tone_input: { 'text': req.query.text },
    content_type: 'application/json'
  };

  try {
    const toneAnalysis = await toneAnalyzer.tone(parameters);
    res.send(toneAnalysis);
  } catch (error) {
    console.log(error);
    res.status(error.code).send(error);
  }
});
```
Re-start the server and direct to [http://localhost:5001/tone?text=The%20food%20tasted%20very%20distgusting](http://localhost:5001/tone?text=The%20food%20tasted%20very%20distgusting) to see the tones: score, tone_id and tone_name.<br />