<template>
  <div class="head">
   	<img src="../../static/image/logo1.png" alt="">
   	<form >
   		<input type="text" placeholder="搜索商品" ref="sousuo">
   		<!-- <router-link to="/fenlei" class="btn"></router-link> -->
      <button @click="dian()" class="btn"></button> 
      
   	</form>
   
  </div>
</template>

<script>
import {setCookie,getCookie,delCookie} from '../assets/cookie.js'
export default {
  name: 'head',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sou:"",
      mengxian:false
    }
  },
  methods:{
  	dian:function(){
      this.$router.push({path:"/fenlei",query:{id:this.$refs.sousuo.value} })
  	},
   

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	margin: 0;
	padding: 0;
	box-sizing:border-box;
}
 .head{
    width: 100%;
    height: 49px;
    background: #269306;
    display: flex;
  }
  .head img{
    margin-left: 15px;
  }
.head>form{
	display: flex;
	align-items:center;
}
.head form input{
	width: 86%;
	height: 35px;
  border: none;
  text-indent: 4%;
  border-radius: 5px 0 0 5px;
}
.head form .btn{
	width: 35px;
	height: 35px;
	background:url(../../static/image/search_btn.jpg); 
	background-position: center center;
  border: none;
  border-radius: 0px 5px 5px 0px;
}
</style>