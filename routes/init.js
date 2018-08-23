'use strict';
var index = require('./pages/index');

module.exports = function(app) {
    app.use('/', index);

    app.get('/rongge', function(req, res, next){
        res.render('pages/rongge');
    })

};