import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import './db/conn';
import authRoutes from './router/auth';

const app = express();
app.use(express.json());

// middleware
const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Hello, I am middleware');
  next();
};

app.get('/', function (req: Request, res: Response) {
  res.send('Hello world app.ts');
});

app.get('/about', middleware, function (req: Request, res: Response) {
  res.send('Hello ABOUT PAGE');
});

app.get('/contact', function (req: Request, res: Response) {
  res.send('Hello contact page');
});

app.get('/api/signin', function (req: Request, res: Response) {
  res.send('Hello signin page');
});

app.get('/api/signup', function (req: Request, res: Response) {
  res.send('Hello signup page');
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send('404 - Page not found');
});

app.use(authRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
