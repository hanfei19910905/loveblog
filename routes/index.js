var Post = require('../modules/post.js');
module.exports = function(app) {
    app.get('/',function(req,res){
        Post.get(null, function(err,posts){
            if(err){
                throw(err);
            }
            console.log(posts);
            res.render('index', {
                            title: 'LoveBlog',
                            success:req.flash('success').toString(),
                            error:req.flash('success').toString(),
                            posts:posts
                            });
        });
    });
    app.post('/',function(req,res){
        post = new Post(req.body.user, req.body.title, req.body.post);
        console.log('post!!',req.body);
        post.save(function(err){
        	if(err){
        		req.flash('error',err);
        		return res.redirect('/');
        	}
        	req.flash('success','success!')
        	res.redirect('/');
        });
    });
}
