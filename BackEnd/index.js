import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
// import db from './config/Database.js';
import UserRoute from './routes/UserRoute.js';
import BudgetRoute from './routes/BudgetRoute.js';
import AuthRoute from './routes/AuthRoute.js'
dotenv.config();

const app = express();

// (async() => {
//   await db.sync();
// })();

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: "auto" }
}));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(UserRoute);
app.use(BudgetRoute);
app.use(AuthRoute);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on port ${process.env.APP_PORT}`);
});