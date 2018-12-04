const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');

const customMW = require('./custom_middelware.js');

const server = express();
const PORT = 5950;

//middleware
// 1) Built in
// 2) 3rd party library
// 3) custom

server.use(express.json());
server.use(helmet());
server.use(logger('tiny'));
server.use(customMW.gatekeeper);

// route handlers
server.get('/entrance', (req, res) => {
    res.status(404).json({message: 'Welcome my good weasel'});
});

server.listen(PORT, err => {
    console.log(`Listening on port ${PORT}`);
})