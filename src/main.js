import Vue from 'vue'
import App from './App.vue'
import router from './router'
import'mint-ui/lib/style.css' //引入的是mint-ui样式文件
import qs from 'qs'
import vuex from 'vuex'
Vue.use(vuex);
var store=new vuex.Store({
	state:{cartcount:0
	},
	mutations:{
	increment(state){
		state.cartcount++;
	},
		updatecount(state,count){
		state.cartcount+=count;
	}
	},
		getters:{
	optcartcount:function(){
	return state.cartcount;
	}
		} //先保存 获取用$store.getters.optcartcount  修改用(赋值)this.$store.commit(updatecount,count);
})
Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
import  {Header,Swipe,SwipeItem,Button,Field,TabContainer,TabContainerItem,Cell,Navbar,TabItem,InfiniteScroll,Spinner} from 'mint-ui' //写'./mint-ui' 会报错 大概是应为mint-ui是npm库吧 加{}意为引用mint-ui中的一个组件 不加{}则引入全部内容
import axios from 'axios'
axios.defaults.withCredentials=true;  //跨域访和问保存session值
Vue.prototype.axios=axios;  //将axios挂到原型函数上
Vue.prototype.qs=qs;
Vue.component(Header.name,Header) //Header.name 是获取mint里的name组件
Vue.component(Swipe.name,Swipe) 
Vue.component(SwipeItem.name,SwipeItem) 
Vue.component(Button.name,Button) 
Vue.component(Field.name,Field)
Vue.component(TabContainer.name,TabContainer);
Vue.component(TabContainerItem.name,TabContainerItem)
Vue.component(Cell.name,Cell)
Vue.component(Navbar.name,Navbar)
Vue.component(TabItem.name,TabItem);
Vue.component(Spinner.name,Spinner)
Vue.use(InfiniteScroll)
Vue.filter('datatime',function(val){
 var data=new Date(val);
 var y=data.getFullYear();
 var m=data.getMonth()+1;//月份从0开始
 var d=data.getDate();
 var h=data.getHours();
 var mi=data.getMinutes();
 var s=data.getSeconds();
m<10&&(m='0'+m)
d<10&&(d='0'+d)
return `${y}年${m}月${d}日-${h}:${mi}:${s}`
}),
Vue.filter('datafilter',function(val){
  var data=new Date(val);
  var y=data.getFullYear();
  var m=data.getMonth()+1;
  var d=data.getDate();
  return `${y}年${m}月${d}日`
})
//{{item.ctime | ''}}
new Vue({
  router,store,
  render: h => h(App)

}).$mount('#app')




