const UsersRouter = require('./users/routes.config');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  // res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  } else {
    return next();
  }
});
app.use(express.json());
UsersRouter.routesConfig(app);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
