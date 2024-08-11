const bcrypt = require('bcryptjs')

const hashPass = (value) => {
    let salt = bcrypt.genSaltSync()
    let hash = bcrypt.hashSync(value, salt)
    return hash
}

const comparePass = (password, hash) => {
    let compare = bcrypt.compareSync(password, hash)
    return compare
}

module.exports = {hashPass, comparePass}