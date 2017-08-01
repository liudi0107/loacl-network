<template>
  <div class="zhu">
  		<div class="head">
        <span @click='houtui()'><</span>
        <h2>个人注册</h2>
      </div>
      <form action="">
        <p>
          <span class="deng" ></span>
          <input type="text" placeholder="用户名（字母或数字，长度6至24个字）" v-model="username">
        </p>
        <p>
          <span class="mi" ></span>
          <input type="password" placeholder="请输入您的密码" v-model="password">
        </p>
        <p>
          <span class="mi" ></span>
          <input type="password" placeholder="重复您的密码">
        </p>
        <p>
          <span class="yanzheng" ></span>
          <input type="text" placeholder="请输入验证码">
          <span></span>
        </p>
        <p>
          <span class="iponnum" ></span>

          <input type="text" placeholder="请输入您的手机号">
        </p>
        <p>
          <span class="shouyan" ></span>
           <input type="text" placeholder="输入您的手机验证码" class="shou">
          <input type="submit" value="获取验证码" id="shoubtns">
        </p>
        <p>
          <span class="yaoqingma" ></span>
          <input type="text" placeholder="请输入您推荐人的邀请码">
        </p>
        <p v-show="isshow" class="xian">{{zi}}</p>
        <input type="button" value="立即注册" v-on:click="zhu()">
      </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'zhu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:"",
      password:"",
      isshow:false,
      zi:""
    }
  },


 methods:{
    houtui:function(){
      console.log(1)
        this.$router.go(-1)
    },
    zhu(){
      
    if(this.username == "" || this.password == ""){
        alert("请输入用户名或密码")
    }else{
        let data = {'username':this.username,'password':this.password}
        
        axios.post('http://localhost:6500/xiang',data,{
          headers:{'Content-Type':'application/json'}
        }).then((res)=>{
         this.isshow=true
         this.zi="注册成功"
          setTimeout(function(){
            this.$router.push('/vip')  
          }.bind(this),1000)
            
        // if(res.data == "ok"){
        //     this.tishi = "注册成功"
        //     this.showTishi = true
        //     this.username = ''
        //     this.password = ''
        //      /*注册成功之后再跳回登录页*/
        //     setTimeout(function(){
        //         this.showRegister = false
        //         this.showLogin = true
        //         this.showTishi = false
        //     }.bind(this),1000)
        // }
        })
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
    list-style: none; 
    box-sizing:border-box;
  }
  
  .zhu .head{
    width: 100%;
    height: 49px;
    background: #22292c;
    display: flex;
  }
  .zhu .head span{
    color: white;
    font-size: 45px;
    padding-left:2%;
  }
  .zhu  h2{
    color:white;
    text-align: center;
    margin: auto;
  }
  .zhu p{
    position: relative;
  }
  .zhu form{
    margin-bottom: 70px;
  }
  .zhu form .deng{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:0;
    background: url(/static/img/btn1.a17c16a.png);
      background-position: 292px -28px;
      background-size: 814px;
      
  }
  .zhu form .mi{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:0;
    background: url(/static/img/btn1.a17c16a.png);
      background-position: 103px -28px;
      background-size: 814px;
      
  }
  .zhu form .iponnum{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:0;
    background: url(/static/img/btn1.a17c16a.png);
      background-position: 292px -110px;
      background-size: 814px;
  }
  .zhu form .yanzheng{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:0;
    background: url(/static/img/btn1.a17c16a.png);
      background-position:  200px -25px;
      background-size: 814px;
  }
  .zhu form .shouyan{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:-4%;
    left:10%;
    background: url(/static/img/btn1.a17c16a.png);
      background-position:  203px -29px;
      background-size: 814px;
  }
  .zhu form .shou{
    width: 53%;
    margin-left: -33%;
  }
  .zhu form #shoubtns{
    width: 25%;
    margin-right: -33%;
  }
  .zhu form .yaoqingma{
    display: inline-block;
    width: 47px;
    height: 45px;
    position: absolute;
    bottom:-4%;
    left:10%;
    background: url(/static/img/btn1.a17c16a.png);
      background-position:  221px -108px;
      background-size: 814px;
  }
  .zhu form input{
    width: 80%;
    height: 45px;
    margin-top:10%;
    border:1px solid #ccc;
  }
  .zhu form input[type=text]{
    text-indent:46px;
  }
  .zhu form input[type=password]{
    text-indent:4em;
  }
  .zhu  .zi{
    line-height: 60px;
    text-align: left;
    padding-left: 8%;
    
  }
  .zhu  .zi span{
    padding-left:25%;
    display: inline-block;
  }
  .zhu  .zi a{
    color: red;
    text-decoration: none;
  }
  .zhu form input[type=button]{
    background-color: green;
    color: white;
    font-size: 20px;
  }
  .xian{
    color: green;
    font-size: 20px;
  }
</style>
