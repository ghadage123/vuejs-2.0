<template>
	<div class="component">
		<h3>you may view user details here</h3>
		<p>many details</p>
		<p>user name : {{ emails }}</p>
		
		
</div>
	
</template>
<script>

	export default {
		props: ['emails']
   
	}
</script>
<style scoped>
 div {
	background-color: lightcoral;
}
</style>
