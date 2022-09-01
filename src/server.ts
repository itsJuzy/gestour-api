import express, { Request, Response } from 'express'

const app = express();

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    return res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000");
})