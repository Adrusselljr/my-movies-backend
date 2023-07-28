const { isAlpha } = require('validator')

const validateUpdate = (req, res, next) => {

    const { firstName, lastName } = req.body
    let errObj = {}

    if(!isAlpha(firstName)) {
        errObj.firstName = "First name should not include numbers or special characters!"
    }
    if(!isAlpha(lastName)) {
        errObj.lastName = "Last name should not include numbers or special characters!"
    }
    
    let checkObj = Object.keys(errObj)

    if(checkObj.length > 0) {
        return res.status(500).json({ message: "Error", error: errObj })
    }
    else {
        next()
    }

}


module.exports = {
    validateUpdate
}