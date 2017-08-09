<!-- 登录页面 -->
<template>
  <div class="vip">
	   <div class="head">
			<span @click='tui()' class="tui"></span>
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
   			<input type="button" value="登录" v-on:click.enter="deng()">
   		</form>
  </div>
</template>

<script>
var Hub =new Vue();
import Vue from "vue"
// 引入cook的js文件，自己封装的方法
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
	      tishi:"",
	      bool:"",
	      obj:{}
	    }
  	},
  	mounted(){
  		if(getCookie("username")){
  			this.$router.push("/geren")
  		}
  	},
 	methods:{
 		//点击注册，跳转到注册页面
 		zhu:function(a){
 			this.$router.push('/zhu')
 		},
 		// 点击退出跳转到退出页面
    	tui:function(){
        	this.$router.go(-1)
    	},
    	// 登录的方法
		deng:function(){
			// 如果密码或者账户为空的时候，给一个提示
	      	if(this.username == "" || this.password == ""){
            	alert("请输入用户名或密码")
        	}else{
        		// 定义一个对象，将账户和密码已对象的形式存进去
	            let data = {'username':this.username,'password':this.password}
	            // /*接口请求*/ 将对象存入到后台系统中
	            axios.post('http://localhost:6500/xiang/login',data,{
	            	// 设置请求头，必须是json格式
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
              		// 设置一个提示信息，成功以后显示，登录成功
		            this.showTishi = true,
		            this.bool=true,
		            // Hub.$emit("change","hehe")
		            // console.log(res.data)
		            // 用户Id将用户ID存到sessionStorage中
		            sessionStorage.uid=res.data.uid
		            // 将账户名存到cookie中
		            setCookie('username',this.username,1000*60)
		            // 设置过1秒后跳转到首页
	                setTimeout(function(){
	                    this.$router.push('/geren')
	                }.bind(this),1000)
          		}).catch(function(){
          			this.tishi = "登录失败"
		            this.showTishi = true;
		            this.bool=false;
		            // 绑定this因为then将this指向该变了
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
	.head .tui{
    width: 19px;
    height: 7%;
    background: url(../../static/image/jd.png) no-repeat;
    background-size: 273px;
    /* margin-left: 20px; */
    position: absolute;
    left: 5%;
    background-position: -27px 12px;

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
		background: url(../../static/image/btn1.png);
	    background-position: 265px -23px;
    	background-size: 729px;
	    
	}
	.vip form .mi{
		display: inline-block;
		width: 45px;
		height: 45px;
		position: absolute;
		bottom:0;
		background: url(/static/img/btn1.a17c16a.png);
	   	background-position: 91px -21px;
   		background-size: 679px;
	    
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
