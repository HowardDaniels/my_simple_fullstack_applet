const express = require('express');
const applet = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

applet.use(cors());
applet.use(express.json());
applet.use(express.urlencoded({ extended : false}));


// create
applet.post('/insert', (request, response) => {

});


// read
applet.get('/getAll', (request, response) => {
    response.json({
        success: true
    })
});


// update


// delete

applet.listen(process.env.PORT, () => console.log("Your applet is running."))