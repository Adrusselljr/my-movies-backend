const express = require('express')
const router = express.Router()
const { createMovie, getAllUsersMovies, getOneMovie, updateMovie, deleteMovie } = require('./controller/movieController')
const { jwtMiddleware } = require('../lib/index')

router.post('/create-movie', jwtMiddleware, createMovie)
router.get('/get-all-user-movies', jwtMiddleware, getAllUsersMovies)
router.get('/get-one-movie/:id', getOneMovie)
router.put('/update-movie/:_id', jwtMiddleware, updateMovie)
router.delete('/delete-movie/:id', jwtMiddleware, deleteMovie)

module.exports = router