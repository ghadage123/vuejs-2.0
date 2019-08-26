<template>
	<div class="component">
		<h1>The user componet</h1>
		<p>im an awesome user</p>
		<!-- <button @click="changename">changename</button> -->
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail :emails="max"></app-user-detail>
			</div>
			<!-- <div class="col-xs-12 col-sm-6">
				<app-user-edit></app-user-edit>	
			</div>
			 --> 
		</div>
		
	</div>


</template>
<script>
	//import UserDetail from './UserDetail.vue';
	//import UserEdit  from './UserEdit.vue';

	export default {

		 data() {
     	return {
     	emails: 'ragini'
     

}

	/*		 components: {
			appUserDetail: UserDetail,
			appuserEdit: UserEdit
		
		}*/

		
		
	}
}

</script>
<style scoped>
div {
	background-color: lightblue;
}
</style>