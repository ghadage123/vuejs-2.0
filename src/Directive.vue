<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-html="'<strong>colorwale paint</strong>'"></p>
                <p v-highlight:background.delayed="'green'">color here</p>
               
        </div>
    </div>
    <hr>
     <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom directive</h1>
               <!-- <p v-highlight="'red'">text color here</p> --> 
               <p v-highlight:background.delayed.another="'red'">text color here</p>

               
        </div>
    </div>
    </div>
</template>

<script>
    
</script>

<style>
    /*.div {
        font: i
    }*/
</style>
