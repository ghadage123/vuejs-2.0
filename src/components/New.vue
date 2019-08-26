<template>
	<div>
		<button @click="counter++">increase</button>
		<p>{{ counter }}</p>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				counter: 0
			};
		},
		destroyed() {
			console.log('Destroyed');
		},
		deactivated() {
          console.log('Deactivated');
		},
		activated() {
			console.log('Activated');
		}
	}
	
</script>