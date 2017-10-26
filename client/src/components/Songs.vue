<template>
  <div >

    <div class="row">
      <div class="col s12 m10 offset-m1 blue-grey">
        <h4 class="left white-text">Songs</h4>
      </div>
      <div class="col s12 m10 offset-m1 white-text">
        <div class="col s12 m3 card blue-grey darken-1" v-for="song in songs">
          <h2>{{song.title}}</h2>
          <p>{{song.artist}} | {{song.album}}</p>
          <div class="card-image">
            <img :src="song.albumImage" alt="">
          </div>

          <div class="card-action">
            <a href="#">This is a link</a>
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
  async mounted () {
    this.songs = (await SongsService.index()).data
  }
}
</script>

<style scoped>
</style>
