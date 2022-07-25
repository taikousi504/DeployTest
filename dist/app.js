"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//const cors = require('cors');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(cors({
//     origin: 'http://127.0.0.1:3001',
//     credentials: true,
//     optionsSuccessStatus: 200
// }))
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}
app.listen(port, () => {
    console.log(`Start on port 3000.`);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
});
