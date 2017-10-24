<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper blue-grey darken-1">
        <a href="#" class="left brand-logo" ><router-link to="/">TabTracker</router-link></a>
        <ul id="nav-mobile" class="right hide-on-s-and-down">
          <li><a href="#">Browse</a></li>
          <li><a href="#" <router-link to="login">Login</router-link>Login</a></li>
          <li><a href="#" <router-link to="register">Register</router-link>Sign Up</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
