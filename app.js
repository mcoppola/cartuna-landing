var express = require('express'),
    http = require('http'),
    app = express(),
    opts = require(__dirname + '/config/opts.js');

express.static.mime.define({'text/css': ['md']});

// Load express configuration
require(__dirname + '/config/env.js')(express, app);

// Load DB
require(__dirname + '/config/db.js')(express, app);

// Load mailer
require(__dirname +  '/config/mailer.js')(express, app);

// Load routes
require(__dirname + '/routes')(app);

// Start the server
http.createServer(app).listen(process.env.PORT || opts.port, function () {
    console.log("\n\nCARTUNA ~ server listening on port %d in production mode",
                opts.port);
});
