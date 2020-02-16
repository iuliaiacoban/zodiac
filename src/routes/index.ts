import * as express from 'express';
import zodiac from '../features/zodiac';

const router = express.Router();

router.get('/', zodiac);

export default router;
