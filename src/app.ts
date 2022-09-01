import express, { Request, Response, Application } from 'express'

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.sendStatus(200);
})

app.listen(3000, () => {
    console.log('Listening http://localhost:3000');
})