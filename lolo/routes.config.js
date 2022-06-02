const UsersController = require('./controller/users.controller');

exports.routesConfig = function (app) {
    app.post('/users/add', [
        UsersController.insert
    ]);
    app.get('/users/list', [
        UsersController.list
    ]);
};
