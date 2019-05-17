const assert = require('assert');
var mongoose = require('mongoose');
require('../models/User');
require('../models/Comment');
require('../models/Article');
const mockResponse = require('./mocks/responses.mock.js');

const articleCtrl = require('../controllers/articles.controller');

mongoose.connect('mongodb://localhost/conduit-test');

describe('Articles routes should', function() {

    it('send error if try to post when not connected', function () {
        const req = { payload: { id: 'GREG3CG45G4' } };
        const resp = articleCtrl.newArticle(req, mockResponse, null);
        assert.strictEqual(resp.mystatus, 422);
    });

});