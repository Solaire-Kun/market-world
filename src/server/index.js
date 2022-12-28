import http from "http";

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Routes
const productsRoute = require('./routes/products');
const loginRoute = require('./routes/login');
const registerRoute = require('./routes/register');
const usersRoute = require('./routes/users');
const ticketsRoute = require('./routes/tickets');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/products', productsRoute);
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/users', usersRoute);
app.use('/support', ticketsRoute);

// Connect
const server = http.createServer(app);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGODB_URI, () => console.log("Connected!"));

server.listen(3000);
const WebSocket = require('ws');
new WebSocket.Server({ server });