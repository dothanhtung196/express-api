var createError = require('http-errors');

const handleNotFound = (req, res, next) => {
    next(createError.NotFound("The route does not exists."));
}

const handleError = (err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        // status: err.status || 500,
        isSuccess: false,
        message: err.message
    });
}

module.exports = {
    handleNotFound,
    handleError
};