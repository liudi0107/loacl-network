<template>
  <div class="jian">
      <router-link v-for="(a,$index) in jian" :to="a.path" class="jian1">
   	<dl >
   		<dd>
   			<img :src="a.img" alt="">
   		</dd>
   		<dt>
   			<span>{{a.p}}</span><span class="span1">{{a.span}}</span>
   		</dt>
   	</dl>
      </router-link>
  </div>
</template>

<script>
import Vue from 'vue'
let hub =new Vue()
export default {
  name: 'jian',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
  }
      // 点击商品在跳转页面展示
  //  methods:{
  //  tiao:function(a) {     
  //    this.a=this.$data.jian[a]
  //    console.log(this.a)
  //     this.$router.push({path:"/zhan", query:{id:this.a}})
  //  }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.jian{
		display: flex;
		margin-top:5px;
		flex-wrap:wrap;
		margin-bottom: 60px;

	}
   .jian1{
      width: 50%;
      text-decoration: none;
      color: black;
   }
	.jian dl{
		width: 100%;
		margin-top: 10px;
	}
	.jian dl dd{
		width: 85%;
		margin: auto;
	}
	.jian dl dd img{
		width: 100%;
	}
	.jian dl dt{
		width: 85%;
		margin:auto;
	}
	.jian dl dt .span1{
		color: red;
	}
</style>
