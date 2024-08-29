import express from 'express';
import cors from 'cors';
import db from './dbConfig.js';
import card from './app/api/card.js';
const app = express();

app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send("<h1 style='text-align: center;margin-top:70px;'>Ahhhhh ! Don't check me, check the database</h1>");
})

card(app);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})