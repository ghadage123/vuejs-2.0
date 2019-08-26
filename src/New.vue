<template>
	<!-- <div class="container">
<div class="row">
<div class="col-xs-12">
    <quates>
    	<h2>{{ quates }}</h2>
    	<p>a wonderful</p>
    </quates>
	</div>
</div>
</div> -->
<div>
	<email></email>
</div>

</template>
<script>
	import Email from './components/Props/Email.vue';
	//import Quates from './components/Quates.vue';


export default{
	/*data: function() {
		return {
			quates: 'the quates'
		}
	},*/

components: {
	//'apindex': Index,
	//'apindex2': Index2,
	//'quates': Quates,
	'email': Email

}
}
</script>

