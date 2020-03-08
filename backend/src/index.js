const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const routes = require('./routes');
const colors = require('colors/safe');
const cors = require('cors');
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
            app.use(cors());
            app.use(express.json());
            app.use(routes);

            const port = process.env.PORT || 5000;

            app.listen(port, () =>
                console.log(colors.green('App running on port'), port)
            );
        }
    }
);
