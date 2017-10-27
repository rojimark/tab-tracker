<template>
  <div class="newsong">
    <div class="row card">
      <form class="col s12 m5 offset-m1">
        <div class="light-blue lighten-1 col s12 m10">
          <span class="card-title">Song Metadata</span>
        </div>

        <div class="row">

          <div class="input-field col s12 m10">
            <input v-model="title" id="title" type="text" class="">
            <label for="title">Title</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="artist" id="artist" type="text" class="">
            <label for="artist">Artist</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="genre" id="genre" type="text" class="">
            <label for="genre">Genre</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="album" id="album" type="text" class="">
            <label for="album">Album</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="albumImage" id="albumImage" type="text" class="">
            <label for="albumImage">Album Image</label>
          </div>
          <div class="input-field col s12 m10">
            <input v-model="youtubeId" id="youtubeId" type="text" class="">
            <label for="youtubeId">Youtube ID</label>
          </div>
        </div>
      </form>
      <div class="row">

        <div class="header1 col s12 m5 z-depth-2">
        <span class="card-title">Song Data</span>
        <br>
      </div>
        <form class="col s12 m5">
           <div class="input-field col s12">
          <textarea id="tab" v-model="tab" class="materialize-textarea"></textarea>
          <label for="tab">Tab</label>
        </div>
         <div class="input-field col s12">
          <textarea id="lyrics" v-model="lyrics" class="materialize-textarea"></textarea>
          <label for="lyrics">Lyrics</label>
        </div>
        </form>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImage: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
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
