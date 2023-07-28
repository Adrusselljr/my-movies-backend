const express = require('express')
const router = express.Router()
const { createUser, getAllUsers, getCurrentUser, updateUser, deleteUser, userLogin, updatePassword } = require('./controller/userController')
const { checkIsEmpty, validateCreate, validateUpdate, validateLogin, jwtMiddleware, validateUpdatePassword } = require('../validator/lib/index')

router.post('/create-user', checkIsEmpty, validateCreate, createUser)
router.get('/all-users', getAllUsers)
router.get('/current-user', jwtMiddleware, getCurrentUser)
router.put('/update-user', checkIsEmpty, validateUpdate, jwtMiddleware, updateUser)
router.put('/update-password', checkIsEmpty, validateUpdatePassword, jwtMiddleware, updatePassword)
router.delete('/delete-user/:id', deleteUser)
router.post('/login', checkIsEmpty, validateLogin, userLogin)

module.exports = router