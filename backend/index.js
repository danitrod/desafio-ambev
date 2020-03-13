const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const routes = require('./src/routes');
const colors = require('colors/safe');
const { join } = require('path');
require('dotenv').config();

const app = express();
app.use(helmet());

mongoose.connect(
    process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    err => {
        if (err) {
            console.error(colors.red('App initialization failed:'), err);
        } else {
            app.use(express.json());
            app.use(routes);
            app.use(express.static(join(__dirname, 'build')));

            const port = process.env.PORT || 5000;

            app.listen(port, () =>
                console.log(colors.green('App running on port'), port)
            );
        }
    }
);
