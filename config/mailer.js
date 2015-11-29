var util = require(__dirname + '/../libs/util.js'),
    nodemailer = require('nodemailer'),
    bodyParser = require('body-parser');

module.exports = function (express, app) {

    app.use( bodyParser.json() );       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
      extended: true
    }));    


    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mcoppola832',
            pass: 'proudandfutilewake'
        }
    });

    app.mailer = transporter;
};


