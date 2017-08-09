<template>
  <div class="zhu">
  		<div class="head">
        <span @click='houtui()' class="tui"></span>
        <h2>个人注册</h2>
      </div>
      <!-- <form > -->
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
          <input type="password" placeholder="重复您的密码" v-model="password2">
        </p>
        <p>
          <span class="iponnum" ></span>
          <input type="text" placeholder="请输入您的手机号" v-model="ipon">
        </p>
        <p>
          <!-- <span class="shouyan" ></span> -->
           <input type="text" placeholder="获取验证码" class="shou" v-model="str">
           <!-- <span v-model="str">{{str}}</span> -->
          <input type="submit" value="获取验证码" id="shoubtns" v-on:click.stop="yanzhengma()">
        </p>
        <p>
          <span class="yaoqingma" ></span>
          <input type="text" placeholder="请输入验证码" v-model="yan">
        </p>
        <p v-show="isshow" class="xian">{{zi}}</p>

        <input type="button" value="立即注册" v-on:click="zhu()">
      <!-- </form> -->
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
      password2:"",
      yan:"",
      ipon:"",
      isshow:false,
      zi:"",
      str:""
    }
  },


 methods:{
    houtui:function(){
      console.log(1)
        this.$router.go(-1)
    },
    // 点击注册进行验证
    zhu(){
      // 定义name的格式数字 字母（字母区分大小写）
      var nReg = /^[a-z 0-9 A-Z]{6,20}$/g;
      // 密码验证
      var mReg =/^\w{6,20}$/g;
      //手机号
      var telReg=/^1[3,4,5,7,8]\d{9}$/
      if(this.username==""){
        this.zi="请输入用户名";
        this.isshow="ture"
      }else if(this.password==""){
        this.zi="请输入密码";
        this.isshow="ture"
      }else if(this.password2==""||this.password2!=this.password){
        this.zi="两次密码不一致";
        this.isshow="ture"
      }else if(this.yan==""){
        this.zi="请输入验证码";
        this.isshow="ture"
      }else  if(this.ipon==""){
        this.zi="请输入手机号";
        this.isshow="ture"
      }else if(!nReg.test(this.username)){
        this.zi="输入用户名格式错误";
        this.isshow="ture"
      }else if(!mReg.test(this.password)){
        this.zi="输入密码格式错误";
        this.isshow="ture"
      }else if(!telReg.test(this.ipon)){
        this.zi="输入手机号格式错误";
        this.isshow="ture"
      }else if(this.yan=!this.str){
        this.zi="验证码错误";
        this.isshow="ture"
      }else{
         let data = {'username':this.username,'password':this.password}        
          axios.post('http://localhost:6500/xiang',data,{
            headers:{'Content-Type':'application/json'}
          }).then((res)=>{
           this.isshow=true
           this.zi="注册成功"
           console.log(res)
            setTimeout(function(){
              this.$router.push('/vip')  
            }.bind(this),1000)
          })
      }








      
 


      






      // if(this.username == "" || this.password == ""){
      //       alert("请输入用户名或密码")
      //   }else{
      //     let data = {'username':this.username,'password':this.password}        
      //     axios.post('http://localhost:6500/xiang',data,{
      //       headers:{'Content-Type':'application/json'}
      //     }).then((res)=>{
      //      this.isshow=true
      //      this.zi="注册成功"
      //      console.log(res)
      //       setTimeout(function(){
      //         this.$router.push('/vip')  
      //       }.bind(this),1000)
      //     })
      // }
    },
    yanzhengma(){
      console.log(12312)
      var codeStr ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      var that=this;
      function getRandom(n, m) {
        n = Number(n);       //转换n,m，结果不是数字就是NaN
        m = Number(m);
        if (isNaN(n) || isNaN(m)) {     //判断n,m,是不是有效数字，如果n或m其中一个传入的不是数字
          return Math.random();      //返回 【0-1）之间的随机小数
      }
      if (n > m) {             //如果n大于m，则交换位置
        var temp = n;
        n = m;
        m = temp;
      }
      return Math.round(Math.random() * (m - n) + n);          //返回，取m,n之间的随机整数。
    }
    function getCode() {     
      that.str = "";　　　　　　　　//定义一个空字符串备用
      for (var i = 0; i < 4; i++) {    //遍历4个索引
        var ran = getRandom(0, 61);      //调用getRandom方法，随机获取一个索引0-61里的随机索引
        that.str +=codeStr.charAt(ran);      //把codeStr字符串里，我们指定获取ran（这个4个索引）；
      }
    }
    getCode();
    
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
  .zhu {
    margin-bottom: 70px;
  }
  .zhu  .deng{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:0;
    background: url(/static/img/btn1.a17c16a.png);
      background-position: 241px -17px;
      background-size: 657px;
      
  }
  .zhu  .mi{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:0;
    background: url(/static/img/btn1.a17c16a.png);
      background-position: 91px -19px;
      background-size: 657px;
      
  }
  .zhu  .iponnum{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:0;
    background: url(/static/img/btn1.a17c16a.png);
      background-position: 242px -85px;
      background-size: 657px;
  }
  .zhu  .yanzheng{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:0;
    background: url(/static/img/btn1.a17c16a.png);
      background-position:  166px -18px;
      background-size: 657px;
  }
  .zhu  .shouyan{
    display: inline-block;
    width: 45px;
    height: 45px;
    position: absolute;
    bottom:-4%;
    left:10%;
    background: url(/static/img/btn1.a17c16a.png);
      background-position:  242px -87px;
      background-size: 657px;
  }
  .zhu  .shou{
    width: 53%;
    margin-left: -33%;
  }
  .zhu  #shoubtns{
    width: 25%;
    margin-right: -33%;
  }
  .zhu  .yaoqingma{
    display: inline-block;
    width: 47px;
    height: 45px;
    position: absolute;
    bottom:-4%;
    left:10%;
    background: url(/static/img/btn1.a17c16a.png);
    background-position: 167px -78px;
    background-size: 610px;
  }
  .zhu  input{
    width: 80%;
    height: 45px;
    margin-top:10%;
    border:1px solid #ccc;
  }
  .zhu  input[type=text]{
    text-indent:46px;
  }
  .zhu  input[type=password]{
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
  .zhu  input[type=button]{
    background-color: green;
    color: white;
    font-size: 20px;
  }
  .xian{
    color: green;
    font-size: 20px;
  }
</style>
