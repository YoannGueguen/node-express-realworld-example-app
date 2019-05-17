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

    it ('username must be lowercase', function () {
        const newUser = new User();
        newUser.username = "TOTO";
        expect(newUser.username).toBe("toto");
    });

    it ('email must be lowercase', function () {
        const newUser = new User();
        newUser.email = "TOTO@TaTa.cOm";
        expect(newUser.email).toBe("toto@tata.com");
    });

    it ('username can\'t be blank', function () {
        const newUser = new User();
        newUser.username = ""
        expect(newUser.validate().then).toThrow();
    });

    it ('email can\'t be blank', function () {
        const newUser = new User();
        newUser.email = ""
        expect(newUser.validate().then).toThrow();
    });

    it ('throw error if username is invalid', function () {
        const newUser = new User();
        newUser.username = "@toto"
        expect(newUser.validate().then).toThrow();
    });

    it ('throw error if email is invalid', function () {
        const newUser = new User();
        newUser.email = "toto.com"
        expect(newUser.validate().then).toThrow();
    });
    
});