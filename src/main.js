import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.use(BootstrapVue)

new Vue({
	store,
	render: (h) => h(App),
	beforeCreate() {
		Vue.prototype.$bus = this
	},

}).$mount('#app')
