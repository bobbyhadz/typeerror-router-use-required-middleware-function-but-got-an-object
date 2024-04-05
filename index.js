// Router.use() requires a middleware function but got a Object

import express from 'express';

// ✅ importing the Router
import blog from './blog.js';

const app = express();

app.use('/blog', blog);

const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
