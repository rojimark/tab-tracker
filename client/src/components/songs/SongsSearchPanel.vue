<template lang="html">
  <div class="search blue-grey">
    <div class="row">
        <div class="input-field col s12 white-text">
          <i class="material-icons prefix">search</i>
          <input id="icon_prefix" type="text" class="validate white-text" v-model="search">
          <label for="icon_prefix" class="active">Search by song, title, artist, or genre</label>
        </div>
        </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if (this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value
      }
    }
  }
}
</script>

<style lang="css">
.search{
  margin-top: 5px;
  position: sticky;
}
</style>
