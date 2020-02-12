import * as express from 'express';

import Zodiac from '../features/zodiac';

class App {
  public express: any;
  public zodiac: any;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();

    router.get('/', (req, res, next) => {

      if (!req.query.hasOwnProperty('date')) {
        res.status(500).send({ error: 'date param is required' });
      }

      try {
        Date.parse(req.query.date);
        const zodiacSign = new Zodiac(req.query.date).getZodiacSign();
        res.status(200).send({ zodiacSign: zodiacSign });
      } catch (error) {
        res.status(500).send({ error: 'invalid date' });
      }

    });

    this.express.use('/', router);
  }

}

export default new App().express;
