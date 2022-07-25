import express from "express";

const app: express.Express = express();
//const cors = require('cors');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(cors({
//     origin: 'http://127.0.0.1:3001',
//     credentials: true,
//     optionsSuccessStatus: 200
// }))

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