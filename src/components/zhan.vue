<template>
  <div class="zhan">
    <div class="head">
      <span @click='tui()' class="tui"></span>
      <h2>商品展示</h2>
    </div>
    <div class="nei">
      <img :src="obj1.img" alt="" >
      
    </div>  
    <div class="foot">
      <p id="name">{{obj1.p}}</p>
      <p class="price"><span id="danjia">单价：</span><span>￥{{obj1.span}}</span></p>      
      <p class="num">
        <span id="danjia">数量：</span>
        <button class="jian" @click="jianN()">-</button>
        <input type="num" v-model="num" class="number">
        <button class="jia" @click="jia()">+</button>
      </p>
    </div>
    <div class="xiang">
      <p><span>上架时间：</span>2015-01-23</p>
      
      <p><span>商品品牌：</span>西域老汉</p>
      <p><span>包装：</span>包</p>
    </div>
    <div class="meng  animated flash" >
      <h2>已成功添加进购物车</h2>
      <div @click="quxiao()" class="anniu">确定</div>
    </div>
    <div class="car">
      <button @click="goucar">购物车</button>
      <div class="biao animated bounceInDown" v-show="show">{{numm}}</div>
      <button @click="zhifu()">立即购买</button>
      <button v-on:click="gouC()" class="che">加入购物车{{bool}}</button>
    </div>
  </div>
</template>

<script>
var Hub =new Vue();
import axios from 'axios'
import Vue from "vue"
import {setCookie,getCookie} from '../assets/cookie.js'
 // setCookie("number",1)
export default {
 
  name: 'zhan',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bool:"",
      arr:true,
      num:1,
      obj:{},
      arr:[],
      obj1:{},
      obj2:{},
      uid:"",
      uidd:"",
      xian:false, 
      arrdataStr:"",
      shu:"",
      numm:"",
      show:false,
      shuzu:[],
      jian:[
        {
          img:"../../static/image/201501201623421459-200-200.jpg",
          p:"西域老汉· 盒装碧根果美国 年货长寿果坚果干果零食特产厂家批发205g T",
          span:"22.80",
            id:1,
            path:"/zhan/1"
        },
        {
          img:"../../static/image/201501201601433359-200-200.jpg",
          p:"西域老汉·盒装葡萄干新疆 年货无核提子特级树上黄特产厂家批发205g T",
          span:"19.80",
            id:2,
            path:"/zhan/2"
        },
        {
          img:"../../static/image/201501231659044924-200-200.jpg",
          p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×2包 T",
          span:"59.60",
            id:3,
            path:"/zhan/3"
        },
        {
          img:"../../static/image/201501231643347618-200-200.jpg",
          p:"西域老汉· 碧根果年货长寿果坚果干果零食特产厂家批发205g×2包 T",
          span:"45.60",
            id:4,
            path:"/zhan/4"
        },
        {
          img:"../../static/image/201501201620269247-200-200.jpg",
          p:"西域老汉·开心果美国年货坚果干果特级自然开无漂白厂家205g×2包 T",
          span:"63.60",
            id:5,
            path:"/zhan/5"
        },
        {
          img:"../../static/image/201501201640018928-200-200.jpg",
          p:"西域老汉·盒装开口杏核新疆年货坚果零食特产蔚县小银杏厂家批发205g T",
          span:"11.80",
            id:6,
            path:"/zhan/6"
        },
        {
          img:"../../static/image/201501231633006149-200-200.jpg",
          p:"西域老汉·盒装开心果美国年货坚果干果特级大籽自然开无漂白厂家205g T",
          span:"31.80",
            id:7,
            path:"/zhan/7"
        },
        {
          img:"../../static/image/201501231659044924-200-200.jpg",
          p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×3包 T",
          span:"89.40",
            id:8,
            path:"/zhan/8"
        },
        {
          img:"../../static/image/201501231706277161-200-200.jpg",
          p:"西域老汉·巴旦木新疆年货干果薄壳大杏仁扁桃仁特产厂家205g×2包 T",
          span:"37.60",
            id:9,
            path:"/zhan/9"
        },
        {
          img:"../../static/image/201501201615075003-200-200.jpg",
          p:"西域老汉·盒装夏威夷果澳洲年货坚果干果零食特产厂家批发开口器205g T ",
          span:"22.80",
            id:10,
            path:"/zhan/10"
        },
        {
          img:"../../static/image/201501201631336363-200-200.jpg",
          p:"西域老汉·盒装开口大榛子美国年货坚果干果零食东北特产厂家批发205g T",
          span:"18.80",
            id:11,
            path:"/zhan/11"
        },
        {
          img:"../../static/image/201501260953196418-200-200.jpg",
          p:"西域老汉·金福满堂C过年货大礼包干果零食特产厂家代理批发1230g T",
          span:"198.00",
            id:12,
            path:"/zhan/12"
        }
      
      ]       
      
    }
  },
  //渲染页面，选中商品后在展示页面显示
  created(){
    //获取商品的id，通过ID获取对象，展示到页面上
    console.log(this.$data)
    this.obj1=this.$data.jian[this.$route.params.id-1];
    // this.numm=getCookie("num")
  },
  methods:{
    //点击上面箭头让也面返回
    tui:function(){
        // 点击退出让页面退回到上一次也面
        this.$router.go(-1)
    },
    // 点击减让商品数量减少
    jianN:function(){
      this.num-=1;
      if(this.num<=1){
        this.num=1
      }
    },
    //点击加让上品加
    jia:function(){
      this.num++;
    },
    // 点击加入购物车
    gouC:function(){
      //判断是否登录
      var that=this
       // this.$router.push({path:"/car",query:{xian:this.xian} })
      if(getCookie("username")==""){
            alert("请先登录");
        //没有登录让页面跳转到登录页面
        this.$router.push("/vip")
      }
        // 购物车数目添加
        this.show=true
        // 商品id
        this.uidd =sessionStorage.getItem("uidd")

        // 通过商品ID找到对应的对象
        // 用户Id
        this.uid=sessionStorage.getItem("uid")

        // console.log(this.uid)
        // 通过用户Id获取用户信息
        axios.get("http://localhost:6500/xiang/"+this.uid).then((res)=>{
          // console.log(res.data.zhan)
          // 如果id中zhan为空或者zhan的内容改变了执行
          if(res.data.zhan==""||!res.data.zhan){
            // console.log(123)
              this.addArr()
              console.log(this.obj2)
               for(var aa  in this.obj2){
                this.shuzu.push(aa)
             
            }
             console.log(this.shuzu.length)
             this.numm=this.shuzu.length-1
             if(this.numm>0){
              this.show=true
             }
              // 将接收的值转成字符串
              this.arrdataStr=JSON.stringify(this.obj2);
               // this.$router.push({path:"/car",query:{xian:this.xian} })
          }else{
            // 将json字符串转换为对象
            this.obj2=JSON.parse(res.data.zhan);
            this.addArr()
             // 将接收的值转成字符串
            console.log(this.obj2)
            for(var aa  in this.obj2){
               this.shuzu.push(aa)
             
             
            }
             console.log(this.shuzu.length)
             this.numm=this.shuzu.length-1
             if(this.numm>0){
              this.show=true
             }
            this.arrdataStr=JSON.stringify(this.obj2)   //obj2==arrdata
            // 把xian 得值传到购物车页面
         
          }

          //修改  如果内容修改了将内容重新传到后台
          axios.put("http://localhost:6500/xiang/"+this.uid,{zhan:this.arrdataStr}).then((res)=>{   
            // 页面跳转到购物车页面
            // this.$router.push("/car");
            // this.$router.push({path:"/car",query:{xian:this.xian} })
            // alert("购买成功")
            this.numm++;

       
                var meng =document.querySelector(".meng");
                meng.style.display="block"
            
           
            
          })
        })


  },
  quxiao(){
    var meng= document.querySelector(".meng")
    meng.style.display="none"
  },
  // 定义一个方法
  addArr(){
          // 将obj2的内容修改，obj2就是传到后台的zhan的内容
        return this.obj2["id"+this.uidd] = { //商品id做key,下面为传值
          "id": this.uidd,
          "num": this.num,
          "price":this.obj1.span,
          "name":this.obj1.p,
          "img":this.obj1.img
        };
    },
    goucar:function(){
      this.$router.push("/car")
    },
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
    .head .tui{
    width: 19px;
    height: 7%;
    background: url(../../static/image/jd.png) no-repeat;
    background-size: 273px;
    /* margin-left: 20px; */
    position: absolute;
    left: 5%;
    z-index: 10000;
    background-position: -27px 12px;

  }
  .head span{
    color: white;
    font-size: 45px;
    padding-left:2%;
  }
  .zhan  h2{
    color:white;
    text-align: center;
    margin: auto;
  }
  .zhan .nei{
    width: 90%;
    height: 300px;
    margin: auto;
    border:1px solid #ccc;
    margin-top: 2%
  }
  .zhan .nei img{
    height: 100%;
    width: 100%;
  }
  .zhan .foot{
    width: 85%;
    height: 140px;
    margin: auto;
    font-size: 18px;
    text-align: left;
    position: relative;
    margin-top: 8%;

  }
  .zhan .foot .price{
    height: 30px;
    padding-top: 15px;

  }
  #danjia{
    color: rgba(0, 0, 0, 0.69);
  }
  .zhan .foot span{
    color: red;
    font-size: 19px;
    margin:2% 0 6% 0;
    /*float: left;*/
  }
  #name{
    color: rgba(34, 44, 34, 0.88);
    font-size: 17px;
    font-weight: 600;
  }
  .zhan .car {
    width: 100%;
    height: 49px;
    border: 1px solid;
    position: fixed;
    bottom: 0;
    display: flex;
    z-index: 1000;
   
  }
  .zhan .car button{
    flex:1;
     font-size: 14px;
      border:none;
  }
  .num #danjia{
    float: left;
    margin-top: 2px;
  }
  .zhan .car button:nth-child(1){
    background:url(../../static/image/car.jpg) no-repeat;
    background-position: 49% 20%;
    background-size: 28px;
    line-height: 75px;
    background-color: #f5f5f5;
  }
  .zhan .car .che{
    background: #ed5564;
    color: white;
    font-size: 18px;
  }
  .zhan .car button:nth-child(3){
    background: #fb6e52;
    color: white;
    font-size: 18px;
  }
  .num{
    width: 100%;
    height: 35px;
    position: absolute;
    left: 0;
    bottom:0%;
    text-align: left;
    font-size: 22px;
    margin-bottom: 3%;
  }
  .num button{
    width: 40px;
    height: 30px;
    font-size: 19px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline: none;
  }
  .num input[type="num"]{
       font-size: 18px;
    width: 25%;
    border-radius: 5px;
    height: 31px;
    margin: -6px;
    /* margin-top: -1px; */
    text-align: center;
    border: 1px solid #ccc;
    /* border: none; */
    background: white;
    outline: none;
  }
  .xiang{
    width: 85%;
    margin: auto;
    text-align: left;
  }
  .xiang p{
    line-height: 30px;  
  }
  .xiang p span{
    width: 80px;
    text-align: right;
    display: inline-block;
  }
  .biao{
    width: 30px;
    height: 30px;
    background: red;
    position: absolute;
    left: 0%;
    border-radius:50%;
    line-height: 30px;
    color: white; 
  }
  .meng{
    width: 100%;
    height: 200px;
    background: rgba(204, 204, 204, 0.73);
    position: fixed;
    top: 30%;
    padding-top: 50px;
    margin: auto;
    display: none;
    z-index: 1000;
  }
  .meng h2{
    color: green;
  }
  .anniu{
    width: 120px;
    height: 45px;
    border: 1px solid;
    margin: auto;
    line-height: 45px;
    margin-top: 20px;
    font-size: 20px;

  }
</style>









