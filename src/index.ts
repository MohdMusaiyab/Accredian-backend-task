import express from 'express';
import userRouter from './routes/user';
import referralRouter from './routes/referral';
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/user',userRouter);
app.use('/referral',referralRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});