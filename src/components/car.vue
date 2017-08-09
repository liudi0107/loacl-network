<template>
  <div class="car">
  		<div class="head">
        <span @click='tui()' class="tui"></span>
        <h2>购物车</h2>
        <span @click="fanhui()" class="fan"></span>
      </div>
      <div class="leibiao">
        <dl v-for="(dd,$index) in arr">
          <dd>
            <img :src="dd.img" alt="">
          </dd>
          <dt><span id="name">{{dd.name}}</span><br/>
          <span>价格：{{dd.price}}</span>
          <p>数量：{{dd.num}}</p>
          </dt>
          <div class="caozuo">
            <div class="jian" @click="dd.num<2 ?dd.num=1:dd.num--,add()">-</div>
            <input type="num" class="num" v-model="dd.num" >
            <div class="jia" @click="dd.num++,add()">+</div>
           
          </div>
           <button class="shan" @click="shan(dd.id)">删除</button>
          
        </dl>
        
      </div>
      <div class="kong" v-show="xian">
          <div class="logo"></div>
          <h3>你的购物车还是空的</h3>
          <p>去挑选一些中意的商品吧</p>
          <button @click="guang()">随便逛逛</button>
      </div>
      <div class="foot">
        <p>合计总金额：<span v-model="zongjia" class="zongjia">{{zongjia}}</span>元</p>
        <button @click="zhifu()">确认支付</button>        
      </div>
      <div class="meng">
          <h2>确定删除吗？</h2>
          <button @click="yes">是</button>
          <button @click="no">否</button>
      </div>
  </div>
</template>
<script src="https://unpkg.com/tween.js@16.3.4"></script>
<script>
import axios from 'axios'
export default {
  name: 'car',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:"",
      zongjia:0,
      shanNum:"",
      uid:"",
      arrdataStr:"",
      arrdata:{},
      gai0:"",
      xian:true,
      index:"",
    }
  },
  created(){
    //获取用户ID
    this.uid=sessionStorage.getItem("uid") 
    // 从展示页面获取数据 
    // console.log(this.$router.history.current.query)
    this.xian=this.$router.history.current.query.xian
    console.log(this.xian)
    // this.xian=this.$data.jian
      // 通过Id调取数据
      axios.get("http://localhost:6500/xiang/"+this.uid).then((res)=>{
          //将获取的ID值输给数组
          this.arr=JSON.parse(res.data.zhan)
          // 调用计算总价格的方法，计算价格
          this.add()
          // 如果报错打印
       }).catch(function(err){
        console.log(err)
       });
   },
 methods:{  
    // 点击退出 
    tui:function(){
      // 调用$router 应该是vue的内置对象
      this.$router.go(-1)
    },
    fanhui(){
      this.$router.push("/")
    },
    guang(){
      this.$router.push("/")
    },
    //删除
    shan:function(index){  
      var meng =document.querySelector(".meng")  
      meng.style.display="block"
     this.index=index
    },
    yes(index){
       //拼接字符串将要删除的产品的ID找到
      delete this.arr["id"+this.index];
      //调用this.gai的方法将新数组传过去
      this.gai(this.arr);
      //从新计算价格
      this.add()  
      var meng =document.querySelector(".meng")  
      meng.style.display="none"  
    },
    no(){
      var meng =document.querySelector(".meng")  
      meng.style.display="none"
    },
      // 总价格
     add() {
        // 设置一个变量
        var  a = 0;
        // for in 遍历数组
        for (var i in this.arr) { 
          // 将数组中的数量*单价得出总价
          a += this.arr[i].num * this.arr[i].price;
        }
        // 给总价保留两位小数
        this.zongjia =a.toFixed(2);
        // 调用gai 的方法将新数据上传
        this.gai(this.arr);
      },
     
      // 改变后的方法
      gai(tt) {
        //  JSON.stringify(）是从一个对象解析出JSON字符串
        this.gai0 = JSON.stringify(tt);
        //修改 后将值传到对应ID 第一个参数是路径  第二个参数是要传的对象
        axios.put("http://localhost:6500/xiang/" + this.uid, {
          zhan: this.gai0
        }).then((res) => {
          console.log("成功");
          this.aa()
        }, function (err) {
          console.log("错误" + err)
        });
      },
      //下载数据的方法
      aa() {
        axios.get("http://localhost:6500/xiang/" + this.uid).then((res) => {
          //从json对象中解析出json字符串
          
          if(res.data.zhan==""){
            this.xian=true
          }
          this.arr = JSON.parse(res.data.zhan);
        })

      },
      
  

   
 }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
    margin: 0;
    padding: 0;
  }
  .car .head{
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
    position: absolute;
    left: 5%;
    background-position: -27px 12px;
  }
   .head .fan{
   width: 19px;
    height: 7%;
    background: url(../../static/image/index_btn.png) no-repeat;
    background-size: 44px;
    position: absolute;
    right: 5%;
    
    background-position: -8px 12px
  }
  .car .head span{
    color: white;
    font-size: 45px;
    padding-left:2%;
  }
  .car  h2{
    color:white;
    text-align: center;
    margin: auto;
  }
  .leibiao{
    width: 100%;
  }
  .leibiao dl{
    width: 100%;
    height: 120px;
    margin-top: 2%;
    display: flex;
    position: relative;
  }
  .leibiao dl dd{
    width: 80%;
    height: 100%;
    /*border: 1px solid;*/
  }
  .leibiao dl dd img{
    width: 90%;
    height: 90%;
    margin: auto;
    margin-top: 5%;
  }
  .leibiao dl dt span{
    text-align: left;
    margin-left: 0;
    color: red;
  }
  .leibiao dl dt{
    text-align: left;
    line-height: 24px;
  }
  .kong{
    width: 100%;
    margin: auto;
    height: 458px;
    background: rgba(204, 204, 204, 0.33); 
   padding-top: 30%;
  }
  .kong .logo{
    border: 1px solid;
    width: 80px;
    height: 80px;
    margin: auto;
    border-radius: 50%;
    background: url(../../static/image/index_btn.png) no-repeat;
    background-size: 97px;
    background-position: 66% -235px
  }
  .kong h3{
    line-height: 90px;
  }
  .kong p{
     line-height: 60px;
  }
  .kong button{
    width: 120px;
    height: 30px;
  }
  .check{
    width: 30px;
    height: 30px;
    margin-left: 5px;
  }
  .foot{
    width: 100%;
    border-top:1px solid black; 
    height: 44px;
    position: fixed;
    bottom: 0;
    background: #ccc;
    z-index: 1000;
    line-height: 44px;
    display: flex;
  }
  .foot p{
    flex:60%;
    text-align: left;
  }
  .foot button{
    width: 120px;
    background:rgba(28, 255, 0, 0.45);
    border: none;
    position: relative;
    right: 0;
     z-index: 1000;
     font-size: 22px;
     color:white;
  }
  .shan{
    width: 60px;
    height: 20px;
    position: absolute;
   bottom: 0;
   right: 20%;
  }
 /* .shan:hover{
    background: red;
  }*/
  .jian{
    width: 60px;
    border-bottom: 1px solid #ccc;
  }
  .jia{
    width: 60px;
    border-top: 1px solid #ccc;
  }
  #name{
    font-size: 15px;
    color: black;
  }
  .caozuo{
    width: 60px;
    height: 60px;
    border: 1px solid #ccc;
    position: absolute;
    bottom: 0;
    right: 2%;
  }
  .num{
    width: 100%;
    text-align: center;
    border: none;
  }
  .zongjia{
    color: red;
    font-size: 25px;
  }
  .meng{
    width: 100%;
    height: 200px;
    background: #ccc;
    position: fixed;
    top:30%;
    padding-top: 50px;
    display: none;
  }
  .meng h2{
    color: red;
  }
  .meng button{
    width: 120px;
    height: 45px;
    margin-top: 30px;
    font-size: 18px;
  }
</style>
