module.exports = function (app) {
    app.get('/', index);
    app.get('/lo', index);
    app.get('/lores', index);
    app.get('/hi', hiRes);
    app.get('/hires', hiRes);
};

var index = function (req, res) {
    res.render('index', { title: 'Cartuna' });
};

var hiRes = function (req, res) {
    res.render('hiRes', { title: 'Cartuna' });
};