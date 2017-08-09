<template>
  <div class="ge">
    <div class="head">
      <span @click='tui()' class="tui"></span>
      <h2>个人中心</h2>
      <!-- <img src="../../static/image/set_b.png" alt="" class="img1" @click="tuichu()"> -->
    </div>
    <div class="logo">
      <div class="img">
        <img src="../../static/image/150-150.png" alt="">
      </div>
      
      <div class="right">
        <p><span>账号：{{msg}}</span></p>
        <p><span>级别：普通会员</span></p>
        <p><span>升级：再消费<a href="">￥3000.00元</a>，即可升为<a href="">vip股东</a></span></p>
      </div>
    </div>
   <div class="meng" v-show="mengxian">
      <div class="biao">
        <h2>是否退出</h2>
        <button class="yes" @click="yes()">YES</button>
        <button class="no" @click="no">NO</button>
      </div>
    </div>
    <p class="nei">分红排名：<span>1037</span>邀请码：<span>无</span>推荐指数：<span>0</span></p>
    <div class="foot">
        <dl>
          <dd  id="dd1"></dd>
          <dt>会员资料</dt>
        </dl>
        <dl>
          <dd id="dd2"></dd>
          <dt>财务管理</dt>
        </dl>
        <dl>
          <dd id="dd3"></dd>
          <dt>订单管理</dt>
        </dl>
        <dl>
          <dd id="dd4"></dd>
          <dt>我的收藏</dt>
        </dl>
        <dl  @click="tuichu()">
          <dd id="dd5"></dd>
          <dt>退出登录</dt>
        </dl>
        <dl  @click="deng()">
          <dd id="dd6"></dd>
          <dt>登录</dt>
        </dl>
    </div>
  </div>
</template>

<script>
import {setCookie,getCookie,delCookie} from '../assets/cookie.js'
export default {
  name: 'ge',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mengxian:false,
      msg:"",
     }
    },
    created(){
      this.msg=getCookie("username")
    },
    mounted(){
      if(getCookie(username=="")){
        this.$router.push("/vip")
      }else{
        this.$router.push("/geren")
      }
    },
    methods:{
      tuichu:function(){
        this.mengxian=true
    
      },
      yes(){
        delCookie("username");
        this.$router.push("/vip")
      },
      no(){
        this.mengxian=false
      },
      deng(){
        this.$router.push("/vip")
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
   .head{
    width: 100%;
    height: 49px;
    background: #22292c;
    display: flex;
  }
  .meng{
  width: 100%;
  height: 100%;
  border: 1px solid;
  position: fixed;
  top: 0%;
  background-color: rgba(0, 0, 0, 0.56);
  z-index: 1000;
}
.meng .biao{
  width: 250px;
  height: 150px;
  border: 1px solid white;
  margin: auto;
  margin-top: 35%;
}
.meng .biao h2{
  line-height: 105px;
  color: red;
}

.meng .biao button{
  width: 100px;
  height: 35px;
  display: inline-block;
}
.img1{
  padding-right: 2%;
}
  .ge .head span{
    color: white;
    font-size: 45px;
    padding-left:2%;
  }
  .ge .head  h2{
    color:white;
    text-align: center;
    margin: auto;
  }
  .ge .logo{
    width: 100%;
    height: 130px;
    background: #209506;
    display: flex;
  }
  .ge .logo .img{
    width: 90px;
    height: 90px;
    border-radius: 50%;
    margin: 3% 8% 0 7%;  
  }
   .ge .logo .img img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 6% 4% 0 3%;
   }
   .ge .logo .right{
      width: 100%;
      height: 90px;
      color: white;
      /*border: 1px solid;*/
      margin-top: 1%;
      text-align: left;
      line-height: 30px;
   }
   .ge .logo .right a{
      color: yellow;
   }
   .ge .nei{
    width: 100%;
    height: 46px;
    line-height: 46px;
    background: #e8e8e8;
   }
   .ge .nei span{
      width: 35px;
      display: inline-block;
      color: red;
   }
   .ge .foot{
      width: 100%;
      /*border: 1px solid red;*/
      display: flex;
      flex-wrap:wrap;
   }
   .ge .foot dl{
   width: 33%;
   height: 120px;
    border: 1px solid #ccc;
    margin-top: 10px;
    padding-top: 20px;
   }
   .ge .foot dl dd{
    width: 45%;
    height: 54px;
    background: url(/static/img/btn1.a17c16a.png);
    background-position: 564px -694px;
    background-size: 599px;
    margin:auto;
    /*line-height: 20px;*/
   }
   .ge .foot dl dt{
    line-height: 45px;
   }
   #dd2{
    background-position: 481px -694px;
   }
   #dd3{
    background-position: 399px -694px;
   }
   #dd4{
    background-position: 317px -694px;
   }
   #dd5{
    background-position: 244px -694px;
   }
</style>
