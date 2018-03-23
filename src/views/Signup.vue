<template>
    <section class="container">
        <h2>Signup</h2>
        
        <form @submit.prevent="signup">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" v-model="email" required aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" v-model="password" id="password" placeholder="Password">
            </div>

            <button class="button is-primary">Signup</button>
        </form>
    </section>
</template>

<script>
import api from "../api";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signup() {
      api
        .signup({
          email: this.email,
          password: this.password
        })
        .then((user) => {
          this.$root.user = user;
          this.$router.push("/");
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>
<style scoped>

</style>