import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/users', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
});

export default usersRouter;

