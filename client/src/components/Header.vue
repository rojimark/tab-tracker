<template>

  <div class="navbar-fixed">

    <nav>
      <div class="nav-wrapper teal mainheader">
        <a href="#" class="header-logo brand-logo" ><router-link to="/">TabTracker</router-link></a>
        <ul id="nav-mobile" class="right hide-on-s-and-down">
          <li class="left"><a href="#" <router-link to="/songs">Browse</router-link></a></li>
          <li v-if="!$store.state.isUserLoggedIn"><a href="#" <router-link :to="{ name: 'login'}">Login</router-link></a></li>
          <li v-if="!$store.state.isUserLoggedIn"><a href="#" <router-link :to="{ name: 'register'}">Register</router-link></a></li>
          <li v-if="$store.state.isUserLoggedIn"><a href="#" v-on:click="logout"><router-link :to="{ name: 'songs' }">Logout</router-link></a></li>
          <!-- <router-link :to="{ name: '', params: {} }"></router-link> -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
      }
    }
  }
</script>

<style scoped>
.mainheader{
  /*background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%);*/
  box-shadow: 0 6px 20px 0 rgba(77, 182, 172, 0.5);
  text-align: left;
}
</style>
