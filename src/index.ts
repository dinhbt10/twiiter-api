import usersRouter from "./routes/users.routes";
import express from 'express';
const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/api', usersRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

