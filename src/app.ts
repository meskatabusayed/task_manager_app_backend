import express from 'express';
import { userRouter } from './modules/users/user.route.js';
import { authRouters } from './modules/auth/auth.route.js';
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//perser
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth" , authRouters);

export default app;
