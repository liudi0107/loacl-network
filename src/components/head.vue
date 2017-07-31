<template>
  <div class="head">
   	<img src="../../static/image/logo1.png" alt="">
   	<form action="http://localhost:8080/?#/fenle">
   		<input type="text" placeholder="搜索商品">
   		<router-link to="/fenlei" class="btn"></router-link>
   	</form>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  	btn:function(){
  		console.log(1)
  		router.push("/fenlei")
  	}
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
	background:url(../../static/image/index_bg.png) no-repeat;
	display: flex;
}
.head>img{
	margin-left: 4%;
}
.head>form{
	display: flex;
	align-items:center;
}
.head form input{
	width: 86%;
	height: 35px;
}
.head form .btn{
	width: 35px;
	height: 35px;
	background:url(../../static/image/search_btn.jpg); 
	background-position: center center;
}
</style>