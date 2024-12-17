let playlistArray = [
  {
    id: 731711,
    playlistName: "Só as melhores",
    tags: [],
    musics: [],
    createdAt: "12/12/2024, 14:43:56",
    updatedAt: "12/12/2024, 14:43:56",
    favorite: false
  }
]

function generateId() {
  return Math.floor(Math.random() * 999999)
}

module.exports = {
  getAllPlaylists: () => {
    return playlistArray
  },

  createPlaylist: (playlistName, tags, musics) => {
    const newPlaylist = {
      id: generateId(),
      playlistName,
      tags: tags ?? [], 
      musics: musics ?? [],
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      favorite: false
    }

    return newPlaylist
  },

  save: (playlist) => {
    playlistArray.unshift(playlist)
  },

  getPlayllstById: (id) => {
    const playlist = playlistArray.find((pl) => pl.id === +id)
    return playlist
  },

  getIndexById: (id) => {
    const playlist = playlistArray.findIndex((pl) => pl.id === +id)
    return playlist
  },

  update: (id, playlistName, tags, musics, favorite) => {
    const playlistIndex = playlistArray.findIndex((pl) => pl.id === +id)
    const playlist = playlistArray.find((pl) => pl.id === +id)

    playlist.playlistName = playlistName

    if (tags) {
      tags.forEach((tag) => {
        if (!playlist.tags.includes(tag)) {
          playlist.tags.push(tag)
        }
      })
    }

    if (musics) {
      musics.forEach((music) => {
        if (!playlist.musics.includes(music)) {
          playlist.musics.push(music)
        }
      })
    }

    playlist.favorite = favorite

    playlist.updatedAt = new Date().toLocaleString()

    playlistArray[playlistIndex] = playlist
  },

  deletePlay: (id) => {
    const playlisIndex = playlistArray.filter((pl) => pl.id !== +id)
    playlistArray = playlisIndex
  }

}