<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
             <app-result></app-result>
                <hr> 
                <app-counter></app-counter>
               <!--  <div>
                <h1>counter: {{ counter }}</h1>
            </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
 import Result from './components/Result.vue';

    export default {
       
        components: {
            appCounter: Counter,
            appResult: Result,
        }
    }
    
</script>