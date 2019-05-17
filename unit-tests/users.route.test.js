const assert = require('assert');
var mongoose = require('mongoose');
require('../models/User');
const mockResponse = require('./mocks/responses.mock.js');

const userCtrl = require('../controllers/user.controller');

mongoose.connect('mongodb://localhost/conduit-test');

describe('Users routes should', function() {

    it('send error if there no email in body', function () {
        const req = { body: { user: { password: "my_password" } } };
        const resp = userCtrl.login(req , mockResponse, null);
        assert.strictEqual(resp.mystatus, 422);
    });

    it('send error if there no password in body', function () {
        const req = { body: { user: { email: "user@email.com" } } };
        const resp = userCtrl.login(req , mockResponse, null);
        assert.strictEqual(resp.mystatus, 422);
    });

    it('send error if email is not valid', function () {
        const req = { body: { user: { email: "useremail.com" } } };
        const resp = userCtrl.login(req , mockResponse, null);
        assert.strictEqual(resp.mystatus, 422);
    });
    
});