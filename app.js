import express from 'express';
import bodyParser from 'body-parser'
import routes from './server/routes'

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(3000, () => console.log('app is running on port 3000'));

export default app;