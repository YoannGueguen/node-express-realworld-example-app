const assert = require('assert');
var mongoose = require('mongoose');
require('../models/User');
require('../models/Comment');
require('../models/Article');
const Article = mongoose.model('Article');
const mockResponse = require('./mocks/responses.mock.js');

const articleCtrl = require('../controllers/articles.controller');

mongoose.connect('mongodb://localhost/conduit-test');

describe('Article module should', function() {

    it('slug is lowercase', function () {
        const mySlug = 'ItIsASlug';
        const testResult = 'itisaslug';

        const newArticle = new Article({

        });
    });

});