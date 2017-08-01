<template>
  <div class="zhan" >
    <div class="head">
      <span @click='tui()'><</span>
      <h2>商品展示</h2>
    </div>
    <div class="nei">
      <img :src="obj.img" alt="">
      
    </div>
    <div class="foot">
      <p>{{obj.p}}</p>
      <p><span>{{obj.span}}</span></p>
    </div>
    <div class="car">
      <button>购物车</button>
      <button>立即购买</button>
      <button>加入购物车</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zhan',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:true,
      obj:{},
      jian:[
        {
          img:"../../static/image/201501201623421459-200-200.jpg",
          p:"西域老汉· 盒装碧根果美国 年货长寿果坚果干果零食特产厂家批发205g T",
          span:"￥22.80",
            id:1,
            path:"/zhan/1"
        },
        {
          img:"../../static/image/201501201601433359-200-200.jpg",
          p:"西域老汉·盒装葡萄干新疆 年货无核提子特级树上黄特产厂家批发205g T",
          span:"￥19.80",
            id:2,
            path:"/zhan/2"
        },
        {
          img:"../../static/image/201501231659044924-200-200.jpg",
          p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×2包 T",
          span:"￥59.60",
            id:3,
            path:"/zhan/3"
        },
        {
          img:"../../static/image/201501231643347618-200-200.jpg",
          p:"西域老汉· 碧根果年货长寿果坚果干果零食特产厂家批发205g×2包 T",
          span:"￥45.60",
            id:4,
            path:"/zhan/4"
        },
        {
          img:"../../static/image/201501201620269247-200-200.jpg",
          p:"西域老汉·开心果美国年货坚果干果特级自然开无漂白厂家205g×2包 T",
          span:"￥63.60",
            id:5,
            path:"/zhan/5"
        },
        {
          img:"../../static/image/201501201640018928-200-200.jpg",
          p:"西域老汉·盒装开口杏核新疆年货坚果零食特产蔚县小银杏厂家批发205g T",
          span:"￥11.80",
            id:6,
            path:"/zhan/6"
        },
        {
          img:"../../static/image/201501231633006149-200-200.jpg",
          p:"西域老汉·盒装开心果美国年货坚果干果特级大籽自然开无漂白厂家205g T",
          span:"￥31.80",
            id:7,
            path:"/zhan/7"
        },
        {
          img:"../../static/image/201501231659044924-200-200.jpg",
          p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×3包 T",
          span:"￥89.40",
            id:8,
            path:"/zhan/8"
        },
        {
          img:"../../static/image/201501231706277161-200-200.jpg",
          p:"西域老汉·巴旦木新疆年货干果薄壳大杏仁扁桃仁特产厂家205g×2包 T",
          span:"￥37.60",
            id:9,
            path:"/zhan/9"
        },
        {
          img:"../../static/image/201501201615075003-200-200.jpg",
          p:"西域老汉·盒装夏威夷果澳洲年货坚果干果零食特产厂家批发开口器205g T ",
          span:"￥22.80",
            id:10,
            path:"/zhan/10"
        },
        {
          img:"../../static/image/201501201631336363-200-200.jpg",
          p:"西域老汉·盒装开口大榛子美国年货坚果干果零食东北特产厂家批发205g T",
          span:"￥18.80",
            id:11,
            path:"/zhan/11"
        },
        {
          img:"../../static/image/201501260953196418-200-200.jpg",
          p:"西域老汉·金福满堂C过年货大礼包干果零食特产厂家代理批发1230g T",
          span:"￥198.00",
            id:12,
            path:"/zhan/12"
        }
      
      ]       
      
    }
  },


  created(){
    this.obj=this.$data.jian[this.$route.params.id-1];
    console.log(this.obj)
    // console.log(this.$data.jian[this.$route.params.id-1])
  },
  methods:{
    tui:function(){
        this.$router.go(-1)
    }
  }



  // 展示商品页面
  // mounted(){
  //  this.arr= this.$route.query.id
  //  console.log(this.arr)
  // }
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
    height: 400px;
    margin: auto;
    border:1px solid #ccc;
  }
  .zhan .nei img{
    height: 100%;
    width: 100%;
  }
  .zhan .foot{
    width: 90%;
    margin: auto;
    font-size: 18px;
  }
  .zhan .foot span{
    color: red;
    font-size: 25px;
    float: left;
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
  .zhan .car button:nth-child(1){
    background:url(../../static/image/car.jpg) no-repeat;
    background-position: 49% 2%;
    background-size: 28px;
    line-height: 65px;
    background-color: #f5f5f5;
  }
  .zhan .car button:nth-child(2){
    background: #ed5564;
    color: white;
    font-size: 18px;
  }
  .zhan .car button:nth-child(3){
    background: #fb6e52;
    color: white;
    font-size: 18px;
  }
</style>
