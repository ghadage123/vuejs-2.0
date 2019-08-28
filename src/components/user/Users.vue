<template>	
<div>	
<h1>the user page</h1>
<hr>

<button @click="navtoHome" class="btn btn-primary"> Go to Home</button>
<hr>
<router-view></router-view> 

</div>	
</template>
<script>
	export default {
		methods: {
			navtoHome() {
			this.$router.push('/');
		}
	}
	}
</script>