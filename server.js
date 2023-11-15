require('dotenv').config();
const express = require('express');
const config = require('config');
const path = require('path');

const PORT = process.env.PORT ?? config.get('PORT');
const staticPath = path.resolve(__dirname, 'src');

const app = express();

app.use(express.static(staticPath));

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
