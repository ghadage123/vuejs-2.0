<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
             
             	<h1>routing</h1>
             	<hr>
             	<app-headerR></app-headerR>
             	<router-view></router-view>
				
			</div>
		</div>
		
	</div>
</template>
<script>
import HeaderR from './components/HeaderR.vue';
	export default {
		components: {
			appHeaderR: HeaderR
		}

	}
</script>