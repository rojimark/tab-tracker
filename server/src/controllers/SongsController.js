 const {Song} = require('../models')



module.exports = {
	async index (req, res) {
		try{
				let songs = null
				const search = req.query.search
				if (search) {
					songs = await Song.findAll({
						where: {
							$or: [
								'title', 'artist', 'genre', 'album'
							].map(key => ({
								[key]: {
									$like: `%${search}%`
							 }
							}))
						}
					})

			}	else {
					songs = await Song.findAll({
						limit: 10
					})
				}
			res.send(songs)
		} catch (err) {
			res.status(500).send({
				error:'An error has occured. Please try again shortly'
			})
		}
	},
	async show (req, res) {
		try{
			const songs = await Song.findById(req.params.songId)
			res.send(songs)
		} catch (err) {
			res.status(500).send({
				error:'An error has occured. Please try again shortly'
			})
		}
	},
	async post (req, res) {
		try{
			const song = await Song.create(req.body)
			res.send(song)
		} catch (err) {
			res.status(500).send({
				error:'An error has occured trying to create a song.'
			})
		}
	},async put (req, res) {
		try{
			const song = await Song.update(req.body, {
				where: {
					id: req.params.songId
				}
			})
			res.send(req.song)
		} catch (err) {
			res.status(500).send({
				error:'An error has occured trying to update the song.'
			})
		}
	}
}
