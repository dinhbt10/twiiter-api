import usersRouter from "./routes/users.routes";
import express from 'express';
import { run } from './models/database.service';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use('/api', usersRouter);
run().catch(console.dir);


app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

