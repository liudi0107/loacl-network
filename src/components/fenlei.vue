<!-- 分类主页面内容 -->
<template>
  <div class="fenlei">
   		<div class="head">
   			<span @click="tui()"><</span>
   			<h2>商品列表</h2>
   		</div>
   		<!-- 拖跩效果 -->
   		<div class="tuo">
   			<ul class="ul1" id="drag" >
	   			<li v-for="obj in arr1" > 
	   				<router-link :to="obj.to" :active-class="obj.dao1">{{obj.lei}}</router-link>
	   			</li>
   			</ul>
   		</div>
   		<!-- 拖拽下的切换 -->
   		<router-view></router-view>
   		<ul class="paixu">
   			<li v-for="(obj,$index) in arr2" :active-class="obj.dao1">
   				<router-link to="obj.to">{{obj.lei}}</router-link>  				
   			</li>
   		</ul>
   		<div v-show="show">
   			<dl v-for="obj in arr3" class="zhan">
   				<dt>
   					<img :src="obj.img" alt="">
   				</dt>
   				<dd>
   					<p>{{obj.p}}</p>
   					<p>{{obj.jia}}</p>
   					<p>{{obj.cheng}}<span>{{obj.num}}</span></p>
   				</dd>  				
   			</dl>
   		</div>
  </div>
</template>

<script>
export default {
  name: 'fenlei',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      show:true,
      show1:false,
      arr1:[
      	{
      		lei:"茶叶",
      		to:"/fenlei",
      		dao1:"dao",

      	},
      	{
      		lei:"酒/饮料",
      		to:"/Fjiu",
      		dao1:"dao"
      	},
      	{
      		lei:"保健食品",
      		to:"/Fbao",
      		dao1:"dao"
      	},
      	{
      		lei:"休闲食品",
      		to:"/Fxiu",
      		dao1:"dao"
      	},
      	{
      		lei:"干货特产",
      		to:"/gan",
      		dao1:"dao"
      	},
      	{
      		lei:"厨房调料",
      		to:"/chu",
      		dao1:"dao"
      	},
      	{
      		lei:"粮油米面",
      		to:"/liang",
      		dao1:"dao"
      	},
      	{
      		lei:"其他",
      		to:"/qiT",
      		dao1:"dao"
      	}

      ],
        arr2:[
      	{
      		lei:"销量排序",
      		to:"/fenlei",
      		dao1:"paiC",
      		to:"/fenlei"
      	},
      	{
      		lei:"人气排序",
      		to:"/Fjiu",
      		dao1:"paiC",
      		to:"/renqi"

      	},
      	{
      		lei:"价格排序",
      		to:"/Fjiu",
      		dao1:"paiC",
      		to:"/jiage"
      	}

      ],
      arr3:[
      	{
      		img:"../../static/image/201505251040437065-100-100.jpg",
      		p:"贵州 贵州名酒 曹国酒  质地纯净 饮后余香 500ml",
      		jia:"￥300.00",
      		cheng:"最近成交",
      		num:"2771"
      	},
      	{
      		img:"../../static/image/201506121743261956-100-100.jpg",
      		p:"湖南 疯狂渔夫 鱼下巴 麻辣鱼骨头 鱼嘴巴 鱼 200g",
      		jia:"￥30.00",
      		cheng:"最近成交",
      		num:"2248"
      	},
      	{
      		img:"../../static/image/201506191035102387-100-100.jpg",
      		p:"黑龙江 五常大米 稻花香米 纯正新米 真空包装  2.5kg",
      		jia:"￥50.00",
      		cheng:"最近成交",
      		num:"1481"
      	},
      	{
      		img:"../../static/image/201506121733204397-100-100.jpg",
      		p:"湖南 疯狂渔夫 超越牛肉 休闲食品 麻辣 148g",
      		jia:"￥50.00",
      		cheng:"最近成交",
      		num:"1481"
      	},
      	{
      		img:"../../static/image/201502111735482525-100-100.jpg",
      		p:"新疆 汇果洲 巴旦木仁 新疆 特产 坚果 美味 零食 225g",
      		jia:"￥30.00",
      		cheng:"最近成交",
      		num:"1091"
      	}
      ]
    
  }
  
},
methods:{
	tui:function(){
		this.$router.go(-1)
	}
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
		box-sizing:border-box;
		list-style: none; 

	}

	a{
		color: black;
	}
	.head{
		width: 100%;
		height: 49px;
		background: #22292c;
		display: flex;
		color: white;
		position: relative;
	}
	.head span{
		font-size: 45px;
		margin-left: 5%
	}
	.head h2{
		margin:auto;
	}
	.tuo{
		width: 100%;
		overflow: hidden;
		position: relative;
      /*加上一个滚动条*/
       overflow-x: scroll;
      /*-webkit-overflow-scrolling: touch;*/
      /*white-space: nowrap;*/
      /*::-webkit-scrollbar{ display:none;}*/

	}
	.fenlei .ul1{
		width: 150%;
		height: 49px;
		background: #f8f8f8;
		line-height: 49px;
		list-style: none;
		display: flex;             
	}
	.fenlei .ul1 li{
		width: 40%;

	}
	.fenlei .ul1 li a{
		text-decoration: none;
	}
	.dao{
		border-bottom: 3px solid green;
		color: green;
		padding-bottom: 15px;
	}
	.fenlei .paixu{
		width: 100%;
		display: flex;
	}
	.fenlei .paixu li {
		width: 33%;
		height: 30px;
		line-height: 30px;
		background-color:rgba(255, 0, 0, 0.26);;
	}
	.fenlei .paixu li a{
		text-decoration: none;
	}
	.paiC{
		background-color:green;
	}
	.zhan{
		display: flex;
		/*height: 100px;*/
		border:1px solid #ccc;
		padding:10px 0 10px 0; 
	}
	.zhan dt img{
		margin:5px;
	}
	.zhan dd p {
		margin-top: 5px;
	}
	.zhan dd p:nth-child(2){
		color:red;
	}
	dd{
		text-align: left;
	}
</style>