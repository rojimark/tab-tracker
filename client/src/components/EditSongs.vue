<template>
  <div class="newsong">
    <div class="row card">
      <form class="col s12 m5 offset-m1">
        <div class=" z-depth-1 blue-grey white-text col s12 m10">
          <span class="card-title">Song Metadata</span>
        </div>

        <div class="row">

          <div class="input-field col s12 m10">
            <input v-model="song.title" id="" type="text" class="validate" required="true">
            <label for="title" class="active">Title</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="song.artist" id="artist" type="text" class="validate" required="true">
            <label for="artist" class="active">Artist</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="song.genre" id="genre" type="text" class="validate" required="true">
            <label for="genre" class="active">Genre</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="song.album" id="album" type="text" class="validate" required="true">
            <label for="album" class="active">Album</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="song.albumImage" id="albumImage" type="text" class="" required>
            <label for="albumImage" class="active">Album Image</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="song.youtubeId" id="youtubeId" type="text" class="" required>
            <label for="youtubeId" class="active">Youtube ID</label>
          </div>
        </div>
      </form>
      <div class="row">

        <div class="blue-grey white-text col s12 m5 z-depth-1">
          <span class="card-title">Song Data</span>
          <br>
        </div>
        <form class="col s12 m5">
          <div class="input-field col s12">
            <textarea id="tab" v-model="song.tab" class="materialize-textarea"></textarea>
            <label for="tab" class="active">Tab</label>
          </div>
          <div class="input-field col s12">
            <textarea id="lyrics" v-model="song.lyrics" class="materialize-textarea"></textarea>
            <label for="lyrics" class="active">Lyrics</label>
            <span class="error col s12 m12 red accent-1 white-text z-depth-1" v-if="error">{{error}}</span>
            <router-link to="/songs">
              <button class="btn waves-effect waves-light right blue-grey" type="submit" name="action" v-on:click.prevent="save" >
                Save<i class="material-icons right">audiotrack</i>
              </button>
            </router-link>
          </div>
        </form>
      </div>

    </div>
  </div>

</template>

<script>
import SongService from '@/services/SongsService'
export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null
    }
  },
  methods: {
    async save () {
      // call API
      this.error = null
      const areAllFieldsFilledIn = Object
      .keys(this.song)
      .every(key => !!this.song[key])

      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      const songId = this.$store.state.route.params.songId
      try {
        await SongService.put(this.song)
        this.$router.push({
          name: 'song',
          params: { songId: songId }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    console.log(this.song)
  }
}
</script>

<style scoped>
.newsong{
  padding-top: 20px;
}
span{
  padding-top: 10px;
  margin-top: 10px;
}
.header1 {
  background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%);
  border-radius: 2px;
}
</style>
