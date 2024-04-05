// ✅ using ES6 Modules syntax
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Blog home page');
});

router.get('/about', (req, res) => {
  res.send('About Blog');
});

// ✅ export your router
export default router;
