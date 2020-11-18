const jwt = require('jsonwebtoken')
module.exports  = function (req, res, next) {
    const token  = req.header("login")
    if (!token) {
        return res.status(401).send('accses faild ')
    }

    try {
        const verified = jwt.verify(token, process.env.TOKEN)
         req.client = verified
        // res.header('login', token)dt8
        next()
    }
    catch (err) {
        res.status(400).send('invalid Token')

    }
};

