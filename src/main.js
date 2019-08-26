import Vue from 'vue'
import App from './Directive.vue'


Vue.directive('highlight', {
    bind(el, binding, vnode) {
        /*el.style.backgroundColor = 'green';*/
        var delay = 0;
        if (binding.modifiers['delayed']) {
            delay = 300;
        }
        setTimeout(() => {
              if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
    } else {
          el.style.color = binding.value;
    }

        }, delay);
       
}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
