async function getPlayilists() {
  try {
    const playlists = await fetch(`http://localhost:3000/playlists`).then((r) => r.json())

    console.log(playlists)
  } catch (e) {
    console.log(`Erro na requisição: ${e.message}`)
  }
}

getPlayilists()