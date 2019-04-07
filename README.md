# Express React App
## Create Express Backend API
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