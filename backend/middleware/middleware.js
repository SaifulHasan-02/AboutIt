const middleware = (req, res, next)=>{
    console.log('Middleware in working')
    next();

}
module.exports = middleware;