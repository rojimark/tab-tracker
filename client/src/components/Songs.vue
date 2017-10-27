<template>
  <div grey teal lighten-5>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="row">
      <div class="titlebar col s12 m12 blue-grey z-depth-1">
        <h5 class="white-text">Songs</h5>


  <div class="fixed-action-btn">
    <a class="btn-floating btn-large teal">
      <i class="large material-icons">mode_edit</i>
    </a>
    <ul>
      <li><router-link to="songs/create"><a class="btn-floating red"><i class="material-icons">add</i></a></router-link></li>
      <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
      <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
      <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
    </ul>
  </div>

      </div>
      <div class="col s12 m12 offset-m1 white-text">
        <div class="col s12 m2 card small blue-grey darken-1 song-card" v-for="song in songs">
          <h6 class="song-title">{{song.title}}</h6>
          <p>{{song.artist}}</p>
          <p>{{song.album}}</p>
          <div class="card-image">
            <img :src="song.albumImage" alt="">
          </div>
          <div class="card-action">
            <a class="btn" @click = "navigateTo({
              name: 'song',
              params: {songId: song.id}
              })"><i class="material-icons right">open_in_new</i> View</a>
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
      songs: []
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
.floatingbutton{
  background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%);
  box-shadow: 0 6px 20px 0 rgba(77, 182, 172, 0.5);
}
.song-card{
  margin-right: 2px;
  margin-left: 2px;

}
.song-card h6 {
  font-weight: bold;
  font-size: 120%;
}
.song-card p {
  margin: auto;
    font-size: 80%;
}
.titlebar h5{
  text-align: center;

}
</style>
