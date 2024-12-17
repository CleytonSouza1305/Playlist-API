const { getAllPlaylists, createPlaylist, save, getPlayllstById, update } = require("../models/playlistsModel")

module.exports = {
  // GET /playlists
  index: (req, res) => {
    const playlist = getAllPlaylists()
    res.status(200).json(playlist)
  },

  // POST /playlists
  createPlaylist: (req, res) => {
    const { title, tags, musics } = req.body

    if (typeof title !== 'string') {
      return res.status(400).json({ message: `${title} must be a string` })
    }

    if (tags && !Array.isArray(tags)) {
      return res.status(400).json({ message: `tags must be an array` })
    }

    if (tags) {
      tags.forEach((tag) => {
        if (typeof tag !== 'string') {
          return res.status(400).json({ message: `tag: '${tag}' must be a string` })
        }
      })
    }

    if (musics && !Array.isArray(musics)) {
      return res.status(400).json({ message: `musics must be an array` })
    }

    if (musics) {
      musics.forEach((music) => {
        if (typeof music !== 'string') {
          return res.status(400).json({ message: `music: '${music}' must be a string` })
        }
      })
    }

    const playlist = createPlaylist(title, tags, musics)
    save(playlist)

    res.status(201).json({ message: 'playlist saved with successful!', playlist})
  },

  // GET /playlists/:id
  getPlayllst: (req, res) => {
    const { id } = req.params
    const playlist = getPlayllstById(id)

    if (typeof playlist === 'undefined') {
      return res.status(404).json({ message: 'playlist not found!' })
    }

    res.status(200).json(playlist)
  },

  // PUT /playlists/:id
  updatePlaylist: (req, res) => {
    const { id } = req.params
    const { playlistName, tags, musics, favorite } = req.body

    const atualizedPlaylist = getPlayllstById(+id)

    if (typeof atualizedPlaylist === 'undefined') {
      return res.status(404).json({ message: `playlist not found!` })
    }

    if (playlistName && typeof playlistName !== 'string') {
      return res.status(400).json({ message: `${playlistName} must be a string` })
    } 

    if (tags && !Array.isArray(tags)) {
      return res.status(400).json({ message: `tags must be an array` })
    }

    if (musics && !Array.isArray(musics)) {
      return res.status(400).json({ message: `musics must be an array` })
    }
    
    update(id, playlistName, tags, musics)

    const updatedPlaylist = getPlayllstById(+id)
    res.status(200).json(updatedPlaylist)
  }
}