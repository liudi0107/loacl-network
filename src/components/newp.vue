<template>
  <div class="newp">
   	<dl v-for="a in newp">
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
  name: 'newp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newp:[
      	{
      		img:"../../static/image/201505261653169386-200-200.png",
      		p:"福建 峰兰 小溪村茶点  洛神花果脯  500g",
      		span:"￥40.00"
      	},
      	{
      		img:"../../static/image/201505292141329160-200-200.jpg",
      		p:"【星】福建 峰兰 武夷岩茶大红袍 礼盒装500g",
      		span:"￥148.00"
      	},
      	{
      		img:"../../static/image/201505271536521868-200-200.jpg",
      		p:"福建 小溪村茶点 茶香樱桃番茄  500g",
      		span:"￥32.00"
      	},
      	{
      		img:"../../static/image/201505292146012788-200-200.jpg",
      		p:"【星】福建 峰兰 口感极佳 正山小种红茶 400g",
      		span:"￥75.00"
      	},
      	{
      		img:"../../static/image/201505101433370824-200-200.jpg",
      		p:"【星】福建 平和产地供应 高山无污染 乌龙茶叶 柚香白芽奇兰80g",
      		span:"￥238.00"
      	},
      	{
      		img:"../../static/image/201505292136107575-200-200.jpg",
      		p:"【星】福建 峰兰 柚子茶 高山无污染 平和九峰眉山茶叶基地 浓香型 500g",
      		span:"￥158.00"
      	},
      	{
      		img:"../../static/image/201502131135010245-200-200.jpg",
      		p:"青海 藏宝 鹿角菜 镇咳化痰 清热解毒 80g",
      		span:"￥26.60"
      	},
      	{
      		img:"../../static/image/201510262100230286-200-200.jpg",
      		p:"【星】平和特产乌龙茶白芽奇兰糙米香浓郁回甘持久250g",
      		span:"￥368.00"
      	},
      	{
      		img:"../../static/image/201503171614529790-200-200.jpg",
      		p:"安徽 七景山 枣片 山茱萸 安徽特产 滋补 山珍 500g",
      		span:"￥36.00"
      	},
      	{
      		img:"../../static/image/201503171622270161-200-200.jpg",
      		p:"安徽 七景山 槠栗豆腐 安徽特产 营养丰富 山珍 250g ",
      		span:"￥26.00"
      	},
      	{
      		img:"../../static/image/201503171557383270-200-200.jpg",
      		p:"安徽 七景山 一级黑木耳 安徽特产 营养丰富  山珍 250g",
      		span:"￥49.00"
      	},
      	{
      		img:"../../static/image/201503171552412607-200-200.jpg",
      		p:"安徽 七景山 二级黑木耳 安徽特产 营养丰富 山珍 250g",
      		span:"￥40.00"
      	},
         {
            img:"../../static/image/201503171529454969-200-200.jpg",
            p:"安徽 七景山 三级香菇 安徽特产 菌菇 花菇 山珍 250g",
            span:"￥32.00"
         },
         {
            img:"../../static/image/201503180944182305-200-200.jpg",
            p:"安徽 七景山 枣皮(山茱萸)  中药必备　滋阴补阳 净重 250g",
            span:"￥18.00"
         },
         {
            img:"../../static/image/201503171557383270-200-200.jpg",
            p:"安徽 七景山 三级黑木耳 安徽特产 营养丰富 山珍 250g",
            span:"￥29.00"
         },
         {
            img:"../../static/image/201504031347536681-200-200.jpg",
            p:"安徽　七景山　黑木耳　一级黑耳　椴木黑木耳 净重250克",
            span:"￥46.00"
         },
         {
            img:"../../static/image/201506180919513313-200-200.jpg",
            p:"北京 妙乐星 儿童成长牛奶（全护型） 营养 健康 2500ml",
            span:"￥62.00"
         },
         {
            img:"../../static/image/201602201623476164-200-200.jpg",
            p:"北京 三元 妙乐星 银装婴儿配方奶粉①段 欧盟标准 900g",
            span:"￥268.00"
         },
         {
            img:"../../static/image/201602201631383097-200-200.jpg",
            p:"北京 三元 妙乐星 金装婴儿配方奶粉①段 欧盟标准 400g",
            span:"￥148.00"
         },
         {
            img:"../../static/image/201602201626389779-200-200.jpg",
            p:"北京 三元 妙乐星 金装较大婴儿配方奶粉②段 欧盟标准 900g T",
            span:"￥328.00"
         },
         {
            img:"../../static/image/201602201634224212-200-200.jpg",
            p:"北京 妙乐星 儿童成长牛奶（智巧型） 营养 健康 2500ml T",
            span:"￥68.00"
         },
         {
            img:"../../static/image/201702161415329855-200-200.jpg",
            p:"Inovital纳豆红菊软胶囊 纳豆红曲 纳豆激酶",
            span:"￥540.00"
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
	.newp{
		display: flex;
		margin-top:5px;
		flex-wrap:wrap;
		margin-bottom: 60px;
	}
	.newp dl{
		width: 50%;
		margin-top: 10px;
	}
	.newp dl dd{
		width: 85%;
		margin: auto;
	}
	.newp dl dd img{
		width: 100%;
	}
	.newp dl dt{
		width: 85%;
		margin:auto;
	}
	.newp dl dt .span1{
		color: red;
	}
</style>
