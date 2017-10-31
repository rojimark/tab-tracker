<template>
  <div grey teal lighten-5>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <songs-search-panel></songs-search-panel>
    <songs-panel></songs-panel>
  </div>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'
import SongsService from '@/services/SongsService'
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
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
