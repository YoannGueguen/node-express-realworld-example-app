var router = require('../routes/api/profiles');

describe('GET users 200', function() {
    it("should return Profiles routes", function(done){
        router.get("/")
            .expect(200, done)
    })
});