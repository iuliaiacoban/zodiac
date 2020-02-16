import * as express from 'express';
import routes from './routes/index';

const router = routes;
const app = express();
const port = process.env.PORT || 3000;

app.use(router);
app.use((err:any, req:any, res:any, next:any) => {
  console.log(err);
});
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
