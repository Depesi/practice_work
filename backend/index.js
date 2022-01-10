/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express from 'express';
import cors from 'cors';
import db from './config/database.js';
import filmsRoutes from './routes/index.js';

const app = express();

try {
  await db.authenticate();
  console.log('Database connected...');
} catch (error) {
  console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/films', filmsRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));
