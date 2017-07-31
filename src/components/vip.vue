<template>
  <div class="vip">
	   <div class="head">
			<span @click='tui()'><</span>
			<h2>登录</h2>
	  	</div>
   		<form action="">
   			<p>
	   			<span class="deng" ></span>
	   			<input type="text" placeholder="请输入你的用户名/邮箱/手机">
   			</p>
   			<p>
   				<span class="mi" ></span>
   				<input type="password" placeholder="请输入您的密码">
   			</p>
   			
   			<p class="zi"><a>忘记密码？点我找回</a><span><a  @click="zhu(1)">我要注册</a></span></p>
   			<input type="button" value="登录">
   		</form>
  </div>
</template>

<script>
export default {
  name: 'vip',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
 	methods:{
 		zhu:function(a){
 			console.log(a)
 			this.$router.push('/zhu')
 		},
 		
    	tui:function(){
        this.$router.go(-1)
    }
  }
 	}
 	

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.vip .head{
		width: 100%;
		height: 49px;
		background: #22292c;
		display: flex;
	}
	.vip .head span{
		color: white;
		font-size: 45px;
		padding-left:2%;
	}
	.vip  h2{
		color:white;
		text-align: center;
		margin: auto;
	}
	/*.vip form{
		border:1px solid;
	}*/
	.vip p{
		position: relative;
	}
	.vip form .deng{
		display: inline-block;
		width: 45px;
		height: 45px;
		position: absolute;
		bottom:0;
		background: url(/static/img/btn1.a17c16a.png);
	    background-position: 292px -28px;
	    background-size: 814px;
	    
	}
	.vip form .mi{
		display: inline-block;
		width: 45px;
		height: 45px;
		position: absolute;
		bottom:0;
		background: url(/static/img/btn1.a17c16a.png);
	    background-position: 103px -28px;
	    background-size: 814px;
	    
	}
	.vip form input{
		width: 80%;
		height: 45px;
		margin-top:10%;
		border:1px solid #ccc;
	}
	.vip form input[type=text]{
		text-indent:4em;
	}
	.vip form input[type=password]{	
		text-indent:4em;
	}
	.vip  .zi{
		line-height: 60px;
		text-align: left;
		padding-left: 8%;
		
	}
	.vip  .zi span{
		padding-left:25%;
		display: inline-block;
	}
	.vip  .zi a{
		color: red;
		text-decoration: none;
	}
	.vip form input[type=button]{
		background-color: green;
		color: white;
		font-size: 20px;
	}
</style>
