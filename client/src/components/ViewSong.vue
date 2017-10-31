<template>
  <div class="">
    <div class="row">
      <div class="card-title blue-grey white-text col s12 top-pane">test</div>
      <div class="col m4 s12 offset-m1 left-pane blue-grey card large white-text">
        <h6>Song Info</h6>
        <hr>
        <div class="teal z-depth-2">
          <h4 class="song-title">{{song.title}}</h4>
          <p>by: {{song.artist}}</p>
          <p>Album: {{song.album}}</p>
        </div>

        <div class="card-image z-depth-2">
          <img :src="song.albumImage" alt="">
        </div>
        <hr>
        <youtube class="z-depth-2"
        :player-height="180"
        :player-width="400"
        :video-id="song.youtubeId">
        </youtube>
        <br>
        <router-link :to="{ name: 'edit', params: {} }"><a class="waves-effect waves-light btn"><i class="material-icons left">edit</i>Edit</a></router-link>
      </div>
      <div class="col m6 s12 offset-m1 pull-m1 right-pane blue-grey card large white-text">
        <h6>Tabs and Lyrics</h6>
        <div class="switch">
          <label>
            Lyrics
            <input v-model="checked" id="checkbox" type="checkbox">
            <span class="lever"></span>
            Tabs
          </label>
        </div>
        <div class="input-field col s12">
          <textarea readonly id="lyrics" v-if="!checked"class="materialize-textarea white-text" >{{song.lyrics}}</textarea>
          <label for="lyrics"></label>
          <div class="input-field col s12">
            <textarea readonly id="tabs" v-if="checked" class="materialize-textarea white-text" >{{song.tab}}</textarea>
            <label for="tab"></label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: null,
      switcher: false,
      checked: false
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  }
}
</script>

<style scoped>
.top-pane{

}
.left-pane{
  height: 800px;
}
.right-pane{
  padding: 2px;
  height: 800px;
}
.card-image img{
  padding: 2px
}
textarea{
  width: 100%;
  border: none;
  height: 700px;
  border-color: transparent;
  overflow: auto;
}
.card {

}
youtube{
}
</style>
