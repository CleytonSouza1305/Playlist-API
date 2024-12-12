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

const formatDate = () => {
  return new Date().toLocaleString('pt-BR', {
    year: 'numeric',  
    month: '2-digit', 
    day: '2-digit',  
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
  });
};

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
      createdAt: formatDate(),
      updatedAt: formatDate(),
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

  update: (id, playlistName, tags, musics, favorite) => {
    const playlistIndex = playlistArray.findIndex((pl) => pl.id === +id)
    const playlist = playlistArray.find((pl) => pl.id === +id)

    playlist.playlistName = playlistName
    playlist.tags = tags
    playlist.musics = musics
    playlist.favorite = favorite

    playlistArray[playlistIndex] = playlist
  }

}