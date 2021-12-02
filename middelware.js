module.exports = function(req,res,next){
    console.log('The current url is other file', req.originalUrl)
    next();
}