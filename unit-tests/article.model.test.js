const User = require("../models/User");
const Article = require("../models/article");


describe('Article model should', function() {

    it('slug is lowercase', function () {
        const testSlug = "fjeiofrTtregorejvEFZfFEJFO";
        const testResultSlug = testSlug.toLocaleLowerCase();
        const newArticle = new Article();
        newArticle.title= testSlug;
        newArticle.describe = "zerzrzer";
        // newArticle.author = new User();
        newArticle.body = "bodddyd_è)àç_è-(-è_ç_è-t(-yèu_çào_èu_çàç_èu_çà_i";
        newArticle.validate();
        expect(newArticle.slug).toContain(testResultSlug);
    });

    it('by default favoriteCounts is equal to 0', function () {
        const newArticle = new Article();
        newArticle.title = "";
        newArticle.validate();
        expect(newArticle.favoritesCount).toBe(0);
    });

});