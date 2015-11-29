var util = require(__dirname + '/../libs/util.js'),
	mongoose = require('mongoose');

module.exports = function (express, app) {

    mongoose.connect('mongodb://localhost/cartuna-landing');
	app.db = mongoose;
};



