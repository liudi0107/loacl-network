<template>
  <div class="qi">
   	<dl v-for="a in qi">
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
  name: 'qi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      qi:[
      	{
      		img:"../../static/image/201504071428296737-200-200.jpg",
      		p:"黑龙江 九鑫山珍 开口松子  籽仁饱满  清香可口 500g",
      		span:"￥110.00"
      	},
      	{
      		img:"../../static/image/201504071516414707-200-200.jpg",
      		p:"黑龙江 九鑫山珍 野生蓝莓原浆  增强免疫力 美容养颜 1000g",
      		span:"￥90.00"
      	},
      	{
      		img:"../../static/image/201504071513191556-200-200.jpg",
      		p:"黑龙江 九鑫山珍 野生蓝莓原浆 营养美味  缓解疲劳 500g",
      		span:"￥70.00"
      	},
      	{
      		img:"../../static/image/201504071506586053-200-200.jpg",
      		p:"黑龙江 九鑫山珍  野生蓝莓糖 美容养颜 增强免疫力 500g",
      		span:"￥70.00"
      	},
      	{
      		img:"../../static/image/201504071459041316-200-200.jpg",
      		p:"黑龙江 九鑫山珍  野生蓝莓果干 营养丰富 增强免疫力  250g",
      		span:"￥80.00"
      	},
      	{
      		img:"../../static/image/201504071451321271-200-200.jpg",
      		p:"黑龙江 九鑫山珍  开口榛子 明目健脑  增强记忆力 500g",
      		span:"￥100.00"
      	},
      	{
      		img:"../../static/image/201504071407027198-200-200.jpg",
      		p:"黑龙江 九鑫山珍  红参  塑料包装  抗疲劳 抗辐射 提高免疫力  250g",
      		span:"￥200.00"
      	},
      	{
      		img:"../../static/image/201504071358446067-200-200.jpg",
      		p:"黑龙江 九鑫山珍 野生黑木耳 袋装 天然补血品 增强免疫力  250g",
      		span:"￥70.00"
      	},
      	{
      		img:"../../static/image/201504071416043830-200-200.jpg",
      		p:"黑龙江 九鑫山珍  猴头菇  菌肉鲜嫩 香醇可口  250g",
      		span:"￥80.00"
      	},
      	{
      		img:"../../static/image/201504071503034622-200-200.jpg",
      		p:"黑龙江 九鑫山珍 野生蓝莓果干 抗衰老 增强免疫力 500g",
      		span:"￥100.00"
      	},
      	{
      		img:"../../static/image/201504071349001959-200-200.jpg",
      		p:"黑龙江 九鑫山珍 野生蜂蜜 瓶装 营养滋补 美容养颜 提高免疫力 500g",
      		span:"￥70.00"
      	},
      	{
      		img:"../../static/image/201504061500226221-200-200.jpg",
      		p:"安徽  干竹笋衣 安徽特产  石台七景山 笋衣子250克 ",
      		span:"￥18.00"
      	},
      	{
      		img:"../../static/image/201504111921152464-200-200.jpg",
      		p:"枣皮酒 安徽石台 七景山特产 山茱萸酿造酒，养生酒 100mlX3  礼品盒装",
      		span:"￥108.00"
      	},
         {
            img:"../../static/image/201504061444360496-200-200.jpg",
            p:"安徽  小竹笋  安徽特产 七景山干笋 250克装",
            span:"￥25.00"
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
	.qi{
		display: flex;
		margin-top:5px;
		flex-wrap:wrap;
		margin-bottom: 60px;
	}
	.qi dl{
		width: 50%;
		margin-top: 10px;
	}
	.qi dl dd{
		width: 85%;
		margin: auto;
	}
	.qi dl dd img{
		width: 100%;
	}
	.qi dl dt{
		width: 85%;
		margin:auto;
	}
	.qi dl dt .span1{
		color: red;
	}
</style>
