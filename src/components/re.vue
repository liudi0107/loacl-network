<template>
  <div class="re">
   	<dl v-for="a in re">
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
  name: 'renqi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      re:[
      	{
      		img:"../../static/image/201502131349214565-200-200.jpg",
      		p:"青海 藏宝 鹿茸片 青海特产 滋补 保健 强筋壮骨 15g ",
      		span:"￥113.05"
      	},
      	{
      		img:"../../static/image/201502121641033696-200-200.jpg",
      		p:"青海 藏宝 柴达木金枸杞 明目 降三高 滋补 270g",
      		span:"￥69.00"
      	},
      	{
      		img:"../../static/image/201502131357448380-200-200.jpg",
      		p:"青海 藏宝 人参果 抗衰老  抗肿瘤  降低血糖  稳定血压 260g",
      		span:"￥95.00"
      	},
      	{
      		img:"../../static/image/201502131431329551-200-200.jpg",
      		p:"青海 藏宝 冻干牦牛酸奶片 老少皆宜 牛奶含片 营养 食品 72g",
      		span:"￥86.45"
      	},
      	{
      		img:"../../static/image/201502121524245861-200-200.jpg",
      		p:"青海 藏宝 野生黑枸杞 礼盒装 抗辐射 抗氧化 60g",
      		span:"￥220.00"
      	},
      	{
      		img:"../../static/image/201502131113478870-200-200.jpg",
      		p:"青海 藏宝 野生黄菇 青海特产 滋补 营养 70g",
      		span:"￥59.85"
      	},
      	{
      		img:"../../static/image/201505281144561464-200-200.jpg",
      		p:"【星】福建 峰兰茶  祁门红茶 红茶足火浓香白芽奇兰   500g",
      		span:"￥160.00"
      	},
      	{
      		img:"../../static/image/201506041727393853-200-200.png",
      		p:"福建 小溪村茶点 番薯仔   500g",
      		span:"￥30.00"
      	},
      	{
      		img:"../../static/image/201606081514467125-200-200.jpg",
      		p:"福建漳州峰兰金观音礼品装250克",
      		span:"￥155.00"
      	},
      	{
      		img:"../../static/image/201505271549524000-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 原味 白金家族礼盒 480g T",
      		span:"￥198.00"
      	},
      	{
      		img:"../../static/image/201505292141329160-200-200.jpg",
      		p:"【星】福建 峰兰 武夷岩茶大红袍 礼盒装500g",
      		span:"￥148.00"
      	},
      	{
      		img:"../../static/image/201502131159201056-200-200.jpg",
      		p:"青海 藏宝 牦牛肉干 青海特产 休闲 旅游 零食 150g T ",
      		span:"￥50.00"
      	},
      	{
      		img:"../../static/image/201502131340460124-200-200.jpg",
      		p:"青海 藏宝 牛气冲天牦牛肉干 青海特产 休闲 旅游 零食 90g  T",
      		span:"￥35.00"
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
	.re{
		display: flex;
		margin-top:5px;
		flex-wrap:wrap;
		margin-bottom: 60px;
	}
	.re dl{
		width: 50%;
		margin-top: 10px;
	}
	.re dl dd{
		width: 85%;
		margin: auto;
	}
	.re dl dd img{
		width: 100%;
	}
	.re dl dt{
		width: 85%;
		margin:auto;
	}
	.re dl dt .span1{
		color: red;
	}
</style>
