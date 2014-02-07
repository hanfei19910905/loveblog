var Post = require('../modules/post.js');
module.exports = function(app) {
    app.get('/',function(req,res){
        res.render('index', {
                            title: 'LoveBlog',
                            success:req.flash('success').toString(),
                            error:req.flash('success').toString()
                            });
    });
    app.post('/',function(req,res){
        post = new Post('fork', req.body.title, req.body.post);
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
