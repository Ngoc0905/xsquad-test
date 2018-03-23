<template>
	<div id="app">
		<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
			<router-link class="navbar-brand" to="/">
				<img src="http://www.x-squad.com/images/logo.png" alt="Logo">
			</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item">
						<router-link class="nav-link" to="/signup" v-if="!$root.user">Register with my email</router-link>
					</li>
				</ul>
			</div>
		</nav>
		<router-view />
		<div class="pure-container" data-effect="pure-effect-slide" v-if="$root.user">
			<input type="checkbox" id="pure-toggle-right" class="pure-toggle" data-toggle="right">
			<label class="pure-toggle-label" for="pure-toggle-right" data-toggle-label="right">
				<span class="pure-toggle-icon"></span>
			</label>

			<div class="pure-drawer" data-position="right">
				<div class="row">
					<div class="large-12 columns">
						<ul class="nav-primary">
							<li>
								<a v-on:click="logout()">Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="pure-pusher-container">
				<div class="pure-pusher">
				</div>
			</div>
			<label class="pure-overlay" for="pure-toggle-right" data-overlay="right"></label>
		</div>
	</div>
</template>

<script>
import api from "./api";

export default {
  data() {
    return {
      avatarUrl: null
    };
  },
  created() {
    const user = api.getUserInfo();
    if (user) {
      	this.$root.user = user;
    }
  },
  methods: {
	  logout(){
		  localStorage.removeItem('userInfo');
		  this.$router.go(0);
	  }
  }
};
</script>
<style>
	.navbar-brand img {
		height: 40px;
	}

	.navbar-nav{
		margin: 0;
	}

	a.router-link-exact-active {
		color: #fff !important;
		opacity: 1 !important;
	}

	.pure-drawer ul {
		list-style: none;
	}

	.pure-drawer ul li a{
		color: #f0f0f0 !important;
	}
</style>
