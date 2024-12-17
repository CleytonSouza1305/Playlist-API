const express = require('express')
const tasksController = require('./controllers/playlistsController')
const playlistsController = require('./controllers/playlistsController')

const router = express.Router()

router.get('/playlists', playlistsController.index)
router.post('/playlists', playlistsController.createPlaylist)
router.get('/playlists/:id', playlistsController.getPlayllst)
router.put('/playlists/:id', playlistsController.updatePlaylist)
router.delete('/playlists/:id', playlistsController.deletePlaylist)

module.exports = router