var router = require('../routes/api/index');

describe('GET users 200', function() {
    it("Should return users routes", function(done){
        router.get("/")
            .expect(200, done)
    })
});