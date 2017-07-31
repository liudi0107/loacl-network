<template>
  <div class="rou">
   	<dl v-for="a in rou">
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
  name: 'rou',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      rou:[
      	{
      		img:"../../static/image/201505081419177838-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 香辣 淘筋道 500g T",
      		span:"￥72.00"
      	},
      	{
      		img:"../../static/image/201505081744594390-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 原味 那达慕礼盒 500g T",
      		span:"￥128.00"
      	},
      	{
      		img:"../../static/image/201505081445317102-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 原味 庄妃礼盒 800g T",
      		span:"￥288.00"
      	},
      	{
      		img:"../../static/image/201505081110161419-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 原味 手撕大片 140g T",
      		span:"￥29.90"
      	},
      	{
      		img:"../../static/image/201505081010386192-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 四种口味 孝庄故里 250g T",
      		span:"￥62.00"
      	},
      	{
      		img:"../../static/image/201505081332371924-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 原味 超干 200g T",
      		span:"￥62.00"
      	},
      	{
      		img:"../../static/image/201505081725010192-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 麻辣口味 麻辣牛肉 160g T",
      		span:"￥30.00"
      	},
      	{
      		img:"../../static/image/201505081349561887-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 四种口味 肉金子 250g T",
      		span:"￥68.00"
      	},
      	{
      		img:"../../static/image/201505081313316315-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 四种口味 安达 250g T",
      		span:"￥50.00"
      	},
      	{
      		img:"../../static/image/201505081340549787-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 原味 男人 500g T ",
      		span:"￥100.00"
      	},
      	{
      		img:"../../static/image/201505081438362048-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 原味 白金家族礼盒 480g T",
      		span:"￥198.00"
      	},
      	{
      		img:"../../static/image/201505111054058611-200-200.jpg",
      		p:"内蒙古 草原旭日牛肉干 休闲食品 四种口味 1000g T",
      		span:"￥248.00"
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
	.rou{
		display: flex;
		margin-top:5px;
		flex-wrap:wrap;
		margin-bottom: 60px;
	}
	.rou dl{
		width: 50%;
		margin-top: 10px;
	}
	.rou dl dd{
		width: 85%;
		margin: auto;
	}
	.rou dl dd img{
		width: 100%;
	}
	.rou dl dt{
		width: 85%;
		margin:auto;
	}
	.rou dl dt .span1{
		color: red;
	}
</style>
