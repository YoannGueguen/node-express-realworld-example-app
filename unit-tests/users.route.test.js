var router = require('../routes/api/index');

    it('get error if there no email in body', function () {

    });

    it('get error if there no password in body', function () {

    });

    it('can user\'s username update', function () {

    });

    it('can user\'s email update', function () {

    });

    it('can user\'s bio update', function () {

    });

    it('can user\'s password update', function () {

    });

    it('request a unknown user must send error 401', function () {

    });

describe('GET users 200', function() {
    it("Should return users routes", function(done){
        router.get("/")
            .expect(200, done)
    })
});