<template>
	<div class="col-sm-6 col-md-4 col-lg-3">
		<div class="panel panel-default">
			<div class="panel-body quote">
				<slot></slot>
			</div>
		</div>
	</div>
	
</template>
<script>
	
</script>
<style>
	.pannel-body {
		font-family: 'Grenze',cursive;
		font-size: 24px;
		color: #6e6e6e;
	}
	.quote {
		background-color: #ffe2e2;
	}
	.quote:hover {
        background-color: #ffe2e2;
    }
</style>
