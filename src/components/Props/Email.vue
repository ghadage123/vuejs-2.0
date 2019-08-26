<template>
	<div>
		<h1>Email App</h1>
	<hr>
       <email :emails="emails"></email>
			</div>
		
	
</template>
<script>
	import EmailDetail from './EmailDetail.vue'
	export default { 
		components: {
			'email': EmailDetail
		},
     
     data() {
     	return {
     	emails: [
     	{
          id: 1,
          subject: 'sent ppt',
          message: 'hello',
      },
      {
          id: 2,
          name: 'ragini',
      },
      ]
     

}

     }
 }

	
</script>