
const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req,res)=>res.send('Elo Solidário API'));
app.listen(3001, ()=>console.log('API rodando'));
