<template>
	<div class="row">
	<app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)"> {{ quote }} </app-quote >
	</div>
</template>
<script>
	import Quot from './Quot.vue';
	
	export default {
		props: ['quotes'],
		components: {
			appQuote: Quot
		},

		 methods: {
			 deleteQuote(index) {
				 this.$emit('quoteDeleted', index);

			 }
		 }

	}
</script>