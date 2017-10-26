<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper blue-grey darken-1">
        <a href="#" class="left brand-logo" ><router-link to="/">TabTracker</router-link></a>
        <ul id="nav-mobile" class="right hide-on-s-and-down">
          <li class="left"><a href="#" <router-link to="songs">Browse</router-link></a></li>
          <li v-if="!$store.state.isUserLoggedIn"><a href="#" <router-link to="login">Login</router-link></a></li>
          <li v-if="!$store.state.isUserLoggedIn"><a href="#" <router-link to="register">Register</router-link></a></li>
          <li v-if="$store.state.isUserLoggedIn"><a href="#" @click="logout" <router-link to="/">Logout</router-link></a></li>
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

</style>
