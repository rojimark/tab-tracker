<template>


      <div class="row">
        <div class="col s12 m6 offset-m3">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Register</span>
              <input type="email" name="email" v-model="email" placeholder="email" />

              <input type="password" name="password" v-model="password" placeholder="password" />
              <div class="error" v-html="error"></div>
              <button  class="teal btn" @click="register">Register</button>
            </div>
          </div>
        </div>
      </div>





</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color:#FF0000;
}
.row{
  margin-top: 30px;
}
</style>
