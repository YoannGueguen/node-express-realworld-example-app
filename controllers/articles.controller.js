var mongoose = require('mongoose');
var Article = mongoose.model('Article');
var Comment = mongoose.model('Comment');
var User = mongoose.model('User');
var auth = require('../routes/auth');

function postNewArticle(req, res, next) {
    User.findById(req.payload.id).then(function(user){
      if (!user) { return res.sendStatus(401); }
  
      var article = new Article(req.body.article);
  
      article.author = user;
  
      return article.save().then(function(){
        console.log(article.author);
        return res.json({article: article.toJSONFor(user)});
      });
    }).catch(next);
}

module.exports = {
    newArticle: postNewArticle
}