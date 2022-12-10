const express = require('express');
const app = express()
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
require('dotenv/config');
const server = app.listen(3000);
const WebSocket = require('ws');
new WebSocket.Server({ server });

// Routes
//const productsRoute = require('./routes/products');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
//const usersRoute = require('./routes/users');

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static('../src'))
//app.use('/add-product', productsRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
//app.use('/manage-users', usersRoute);

// Multer
const FileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});
const upload = multer({ storage: FileStorage })

// Connect
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION, () => console.log("Connected!"));

app.post('/upload', upload.array('images', 2), (req, res) => {
    res.json('Images successfully uploaded!').status(201);
});

app.get('/*', function (request, response){
    response.sendFile(path.resolve('public', 'index.html'))
});