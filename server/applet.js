const express = require('express');
const applet = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

applet.use(cors());
applet.use(express.json());
applet.use(express.urlencoded({ extended : false}));


// create


// read


// update


// delete