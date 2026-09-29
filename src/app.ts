import express from 'express';
import { userRouter } from './modules/users/user.route.js';
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//perser
app.use(express.json());

app.use("/api/v1/users", userRouter);

export default app;
