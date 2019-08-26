<template>
		<div class="container">
			<app-header :quoteCount="quotes.lenght" :maxQuotes="maxQuotes"></app-header>
			<app-new-quote @quoteAdded="newQuote"></app-new-quote>

			<app-quote-grid :quotes="quotes" @quoteDeleted="deletedQuote"></app-quote-grid>
			<div class="row">
				<div class="col-sm-12 text-center">
				<div class="alert.alert-info">Info: click on a Quote to Delete it</div>
		</div>
			</div>
		</div>
</template>
<script>
	import QuotGrid from './components/QuotGrid.vue';
	import NewQuote1 from './components/NewQuote1.vue';
	import Header1 from './components/Header1.vue';
	
	export default {
		data: function() {
			return {
				quotes: [
				         'just a quotes to see something'

				],
				maxQuotes: 10
			}
		},
		methods: {
			newQuote(quote) {
            this.quotes.push(quote);
			},
			deletedQuote(index) {
				this.quotes.splice(index, 1);

			}
		},
		components: {
			appQuoteGrid: QuotGrid,
			appNewQuote: NewQuote1,
			appHeader: Header1
		}
	}

</script>