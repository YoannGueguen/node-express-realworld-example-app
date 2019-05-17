const mongoose = require('mongoose');
require('../models/User');
const User = mongoose.model('User');
const assert = require('assert');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

describe('Users model should', function() {

    it('generate a JWT with a 60 days validity', function () {
        const userJwt = new User({}).generateJWT();
        const decodedJwt = jwt.decode(userJwt, secret);
        const exp = decodedJwt.exp;
    
        const today = new Date();
        const tExp = new Date(today);
        tExp.setDate(today.getDate() + 60);
        const testExp = parseInt(tExp.getTime() / 1000);

        assert.strictEqual(exp, testExp);
    });
    
});