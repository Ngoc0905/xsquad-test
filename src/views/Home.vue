<template>
    <div class="container">
		<h1>Home page</h1>
		<pre v-if="user">{{ user }}</pre>
    </div>
</template>

<script>
import api from "../api";

export default {
  data() {
    return {
      user: null
    };
  },

  mounted() {
    this.user = api.getUserInfo();
  },

  methods: {}
};
</script>

<style scoped>

</style>

