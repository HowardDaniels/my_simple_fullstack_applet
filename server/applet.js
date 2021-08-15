const express = require('express');
const applet = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

applet.use(cors());