module.exports = function (app) {
    app.get('/', index);
    app.get('/lo', loRes);
    app.get('/lores', loRes);




    // Email ===================================== //

    var Email = app.db.model('Email', { value: String });

    app.post('/email', function (req, res) {

        if (!req.body || !req.body.email) {
            return res.sendStatus(500);
        }

        var submition = req.body.email;

        if (submition.indexOf('@') < 0) {
            return res.sendStatus(500);
        }

        var options = {
            from: 'Cartuna Bot <bot@cartunacom>', // sender address
            to: 'mcoppola832@gmail.com', // list of receivers
            subject: 'Cartuna Email Sign Up', // Subject line
            text: submition, // plaintext body
            html: '<b>' + submition + '</b>' // html body
        };

        var email = new Email({ value: submition });
        return email.save(function (err) {
          if (err) {
            console.log('Email DB error', err);
            res.send(500);
          }

          return app.mailer.sendMail(options, function(err, info){
            if(err){
                console.log(err);
                res.sendStatus(500);
            }
            console.log('Email Sign Up - Message sent: ' + info.response);
            res.sendStatus(200);
        });
        });

        

    });

};

var index = function (req, res) {
    res.render('index', { title: 'Cartuna' });
};

var loRes = function (req, res) {
    res.render('loRes', { title: 'Cartuna' });
};



