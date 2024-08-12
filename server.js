const express = require('express');
const app = express();
const cors = require('cors');
const port = 3002;
const mongoose = require('mongoose');
const router = require('./router');

app.use(express.json());
app.use(cors());

const uri = 'mongodb+srv://hirusha:3XIzTVP5eEsAmRfJ@cluster0.nwko1gt.mongodb.net/testmongodb?retryWrites=true&w=majority&appName=Cluster0';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to mongoDB');
    } catch (error) {
        console.log(error);
    }
};

connect();

app.use('/api', router);

const server = app.listen(port, '0.0.0.0', () => {
    console.log(`node server listening on ${server.address().port}`);
});

module.exports = app;