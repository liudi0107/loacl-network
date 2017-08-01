<template>
  <div class="vip">
	   <div class="head">
			<span @click='tui()'><</span>
			<h2>登录</h2>
	  	</div>
   		<form action="">
   			<p>
	   			<span class="deng" ></span>
	   			<input type="text" placeholder="请输入你的用户名/邮箱/手机" v-model="username">
   			</p>
   			<p>
   				<span class="mi"></span>
   				<input type="password" placeholder="请输入您的密码" v-model="password">
   			</p>
   			
   			<p class="zi"><a>忘记密码？点我找回</a><span><a  @click="zhu(1)">我要注册</a></span></p>
   			<p v-show="showTishi" class="ti">{{tishi}}</p>
   			<input type="button" value="登录" v-on:click="deng()">
   		</form>
  </div>
</template>

<script>
import {setCookie,getCookie} from '../assets/cookie.js'
import axios from 'axios'
export default {
  name: 'vip',
  	data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      showTishi:false,
	      username:"",
	      password:"",
	      tishi:""
	    }
  	},
 	methods:{
 		zhu:function(a){
 			this.$router.push('/zhu')
 		},
    	tui:function(){
        	this.$router.go(-1)
    	},
    	/*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
		// if(getCookie('username')){
		//     this.$router.push('/')
		
		// },
		deng:function(){
	      	if(this.username == "" || this.password == ""){
            	alert("请输入用户名或密码")
        	}else{
	            let data = {'username':this.username,'password':this.password}
	            /*接口请求*/
	            axios.post('http://localhost:6500/xiang/login',data,{
					headers:{'Content-Type':'application/json'}
				}).then((res)=>{
	             // /*接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值*/	


	             // 如果使用其他服务器可以用下面代码，图书管理系统不支持账户密码验证
		            // if(res.data == -1){
		            //       this.tishi = "该用户不存在"
		            //       this.showTishi = true
		            // }else if(res.data == 0){
		            //       this.tishi = "密码输入错误"
		            //       this.showTishi = true
		            // }else if(res.data == 'admin'){
		            //   /*路由跳转this.$router.push*/
		            //       this.$router.push('/vip')
		            // }else{
		            //       this.tishi = "登录成功"
		            //       this.showTishi = true
		            //       setCookie('username',this.username,1000*60)
		            //       setTimeout(function(){
		            //           this.$router.push('/')
		            //       }.bind(this),1000)
              		// }
              		//图书管理系统只能用这样简单验证
              		this.tishi = "登录成功"
		            this.showTishi = true
		            setCookie('username',this.username,1000*60)
	                setTimeout(function(){
	                    this.$router.push('/')
	                }.bind(this),1000)
          		}).catch(function(){
          			console.log(123)
          			this.tishi = "登录失败"
		            this.showTishi = true
          		}.bind(this))
			}
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
	.ti{
		color: red;
	}
</style>
