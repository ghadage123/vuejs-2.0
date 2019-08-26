<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedcomponent = 'abc'">Quates</button>
        <button @click="selectedcomponent = 'appauthor'">Auhor</button>
        <button @click="selectedcomponent = 'appnew'">New</button>
        <hr>
        <p>{{ selectedcomponent }}</p>

       <!-- <abc>
        <h2 slot="title">{{ qtitle }}</h2>
         <p> a wonderful quates</p>
        </abc> -->
        <keep-alive>
        <component :is="selectedcomponent"></component>
        <p> default</p>
      </keep-alive> 
      </div>
   </div>
</div>
</template>

<script>
  //import Form from './components/Form.vue';
    //import Server from './components/shared/Server.vue';
    //import Serv from './components/shared/Serv.vue';
   // import ServerDetail from './components/Details/ServerDetail.vue';
   // import User from './components/User.vue';
    //import ServerDetails from './components/Server/ServerDetails.vue';
    import Quates from './components/Quates.vue';
    //import Index from './components/Index.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';
  


    export default {
      data: function() {
        return {
          qtitle: 'queen',
          selectedcomponent: 'abc'
        }
      },
  
         components: {
          'abc': Quates,
            //appUser: User
         //'lsdskjdsijer': Serv,
          // 'student-app' : ServerDetail,
            //'appind': Index,
            'a }ppauthor': Author,
            'appnew': New

        }
        
   
</script>

<!-- <style scoped>
  div.component {
    border: 1px solid black;
    padding: 30px;
  }
</style>

 -->