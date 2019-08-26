<template>
 <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animation</h1>
               <hr>
               <button class="btn btn-primary" @click="show = !show">Show alert</button> 
               <br></br>
               <transition name="slide">
               <div class="alert alert-info" v-if="show">some alert here</div>
           </transition>
            <transition name="slide">
               <div class="alert alert-info" v-if="show">some alert here</div>
           </transition>
            </div>
        </div>
</div>
</template>
<script>

export default{
data() {
  return {
  show: false
}
}
}
</script>
<style>
 .fade-enter {
  opacity: 0;
 }
 .fade-enter-active {
  transition: opacity 1s;
 }
 .fade-leave {
  
 }
 .fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
 }
.slide-enter {
  
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity .5s;
}
.slide-leave {
 
}
.slide-leave-active {
 animation: slide-in 1s ease-out forwards;
 transition: opacity 1s;
 opacity: 0;
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}


  </style>