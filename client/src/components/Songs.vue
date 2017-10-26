<template>
  <div >

    <div class="row">
            <div class="col s12 m10 offset-m1 blue-grey">
              <h4 class="left white-text">Songs</h4>
            </div>
            <div class="col s12 m10 offset-m1">
              <div class="col s12 m3 card teal" v-for="song in songs">
                <h2>{{song.title}}</h2>
                <p>{{song.artist}} | {{song.album}}</p>
              </div>
            </div>
          </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      songs: [
        {
          title: 'Float On',
          artist: 'John Mayer',
          album: 'Good News'
        },
        {
          title: 'Float On',
          artist: 'John Mayer',
          album: 'Good News'
        },
        {
          title: 'Float On',
          artist: 'John Mayer',
          album: 'Good News'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
