module.exports = function (app) {
    app.get('/', index);
    app.get('/lo', loRes);
    app.get('/lores', loRes);

};

var index = function (req, res) {
    res.render('index', { title: 'Cartuna' });
};

var loRes = function (req, res) {
    res.render('loRes', { title: 'Cartuna' });
};