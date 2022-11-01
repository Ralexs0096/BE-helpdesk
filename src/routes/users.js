import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  console.log('users route');
});

export default router;
