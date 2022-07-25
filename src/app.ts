import express from "express";
import { PrismaClient } from '@prisma/client';


const app: express.Express = express();
//const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(cors({
//     origin: 'http://127.0.0.1:3001',
//     credentials: true,
//     optionsSuccessStatus: 200
// }))

const prisma = new PrismaClient();

let port = process.env.PORT;
if (port == null || port == ""){
    port = 3000;
}
app.listen(port, () => {
    console.log(`Start on port 3000.`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.get('/scores', async (req, res) => {
    const scores = await prisma.score.findMany();
    return res.json(scores);
});

app.post('/scores', async (req, res) => {
    const {score, user_id} = req.body;
    const result = await prisma.score.create({
        data: {
            score,
            user_id,
        },
    });
    return res.json(result);
} );