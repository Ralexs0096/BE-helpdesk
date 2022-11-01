import { Router } from 'express';
const router = Router();

console.log('testing');

router.get('/', () => {
  console.log('users route');
});

export default router
