<template>
  <div class="jian">
   	<dl v-for="a in jian">
   		<dd>
   			<img :src="a.img" alt="">
   		</dd>
   		<dt>
   			<span>{{a.p}}</span><span class="span1">{{a.span}}</span>
   		</dt>
   	</dl>
  </div>
</template>

<script>
export default {
  name: 'jian',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      jian:[
      	{
      		img:"../../static/image/201501201623421459-200-200.jpg",
      		p:"西域老汉· 盒装碧根果美国 年货长寿果坚果干果零食特产厂家批发205g T",
      		span:"￥22.80"
      	},
      	{
      		img:"../../static/image/201501201601433359-200-200.jpg",
      		p:"西域老汉·盒装葡萄干新疆 年货无核提子特级树上黄特产厂家批发205g T",
      		span:"￥19.80"
      	},
      	{
      		img:"../../static/image/201501231659044924-200-200.jpg",
      		p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×2包 T",
      		span:"￥59.60"
      	},
      	{
      		img:"../../static/image/201501231643347618-200-200.jpg",
      		p:"西域老汉· 碧根果年货长寿果坚果干果零食特产厂家批发205g×2包 T",
      		span:"￥45.60"
      	},
      	{
      		img:"../../static/image/201501201620269247-200-200.jpg",
      		p:"西域老汉·开心果美国年货坚果干果特级自然开无漂白厂家205g×2包 T",
      		span:"￥63.60"
      	},
      	{
      		img:"../../static/image/201501201640018928-200-200.jpg",
      		p:"西域老汉·盒装开口杏核新疆年货坚果零食特产蔚县小银杏厂家批发205g T",
      		span:"￥11.80"
      	},
      	{
      		img:"../../static/image/201501231633006149-200-200.jpg",
      		p:"西域老汉·盒装开心果美国年货坚果干果特级大籽自然开无漂白厂家205g T",
      		span:"￥31.80"
      	},
      	{
      		img:"../../static/image/201501231659044924-200-200.jpg",
      		p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×3包 T",
      		span:"￥89.40"
      	},
      	{
      		img:"../../static/image/201501231706277161-200-200.jpg",
      		p:"西域老汉·巴旦木新疆年货干果薄壳大杏仁扁桃仁特产厂家205g×2包 T",
      		span:"￥37.60"
      	},
      	{
      		img:"../../static/image/201501201615075003-200-200.jpg",
      		p:"西域老汉·盒装夏威夷果澳洲年货坚果干果零食特产厂家批发开口器205g T ",
      		span:"￥22.80"
      	},
      	{
      		img:"../../static/image/201501201631336363-200-200.jpg",
      		p:"西域老汉·盒装开口大榛子美国年货坚果干果零食东北特产厂家批发205g T",
      		span:"￥18.80"
      	},
      	{
      		img:"../../static/image/201501260953196418-200-200.jpg",
      		p:"西域老汉·金福满堂C过年货大礼包干果零食特产厂家代理批发1230g T",
      		span:"￥198.00"
      	}
      
      ]
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
	.jian{
		display: flex;
		margin-top:5px;
		flex-wrap:wrap;
		margin-bottom: 60px;
	}
	.jian dl{
		width: 50%;
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
