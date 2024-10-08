const jwt = require('jsonwebtoken')

const secret = "rahasia"

const signToken = (payload) => {
    return jwt.sign(payload, secret)
}

const verivyToken = (token) => {
    return jwt.verify(token, secret)
}

module.exports = {
    signToken, 
    verivyToken
}