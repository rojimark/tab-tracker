
module.exports = (sequelize, DataTyes) => {
const Song = sequelize.define('Song',{
  title: DataTyes.STRING,
  artist: DataTyes.STRING,
  genre: DataTyes.STRING,
  album: DataTyes.STRING,
  albumImage: DataTyes.STRING,
  youtubeId: DataTyes.STRING,
  lyrics: DataTyes.TEXT,
  tab: DataTyes.TEXT
})
  return Song
}
