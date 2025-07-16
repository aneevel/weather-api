import express, { Request, Response } from "express";
import 'dotenv/config'

const weatherRoutes = require('./routes/routes.ts');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Weather API');
});

app.listen(port, () => {
  console.log(`Weather API running on port ${port}`);
})

app.use(weatherRoutes);
