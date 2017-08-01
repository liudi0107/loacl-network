<template>
  <div class="lei">
  	<dl v-for="a in lei" @click="tiao(a.num)">
		<dd :class="a.cla"></dd>
		<dt>{{a.p}}</dt>
  	</dl>
  </div>
</template>

<script>
import cha from "@/components/cha"
export default {
  name: 'lei',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lei:[
      	{	p:"茶叶",
      		cla:"cha",
      		to:"/fenlei",
      		num:0

      	},
      	{
      		p:"酒/饮料",
      		cla:"jiu",
      		to:"/Fjiu",
      		num:1
      	},
      	{
      		p:"保健食品",
      		cla:'bao',
      		to:"/Fbao",
      		num:2
      	},
      	{
      		p:"休闲食品",
      		cla:"xiu",
      		to:"/Fxiu",
      		num:3
      	},
      	{
      		p:"干货特产",
      		cla:"te",
      		to:"/gan",
      		num:4
      	},
      	{
      		p: "厨房调料",
      		cla:"chu",
      		to:"/chu",
      		num:5
      	},
      	{
      		p:"粮油米面",
      		cla:"mi",
      		to:"/liang",
      		num:6
      	},
      	{
      		p:"其他",
      		cla:"qi",
      		to:"/qiT",
      		num:7

      	}
      ]
    }
  },
  methods:{
  	tiao:function(index){  
  			//获取return对象的值
  			console.log(this.$data)		
  			this.$router.push(this.$data.lei[index].to)  		
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
	}
	.lei{
		width: 100%;
		/*height: 165px;*/
		display: flex;
		/*border: 1px solid;*/
		flex-wrap:wrap;
	}
	.lei>dl{
		/*border: 1px solid;*/
		width: 25%;
		padding-top: 5%
	}
	.lei>dl>dd{
		width: 50px;
		height: 50px;
		/*border:1px solid;*/
		margin: auto;
		border-radius: 50%;
		background-size: 440px;
	}
	.lei .cha{
		background:url(../../static/image/icon2.png) no-repeat;
	    background-color: #00cce4;
	    background-position: -3px -5px;
	     
	}
	.lei .jiu{
		background:url(../../static/image/icon2.png) no-repeat;
		background-color: #f53876;
		background-position: -51px -2px;
	}
	.lei .bao{
		background:url(../../static/image/icon2.png) no-repeat;
		background-color: #ff4f4f;
		background-position: -101px -2px;
	}
	.lei .xiu{
		background:url(../../static/image/icon2.png) no-repeat;
		background-color: #fe7c23;
		background-position: -150px -2px;
	}
	.lei .te{
		background:url(../../static/image/icon2.png) no-repeat;
		background-color: #cb1924;
		background-position: -200px -2px;
	}
	.lei .chu{
		background:url(../../static/image/icon2.png) no-repeat;
		background-color: #fd5e44;
		background-position: -250px -2px;
	}
	.lei .mi{
		background:url(../../static/image/icon2.png) no-repeat;
		background-color: #feb22f;
		background-position: -300px -2px;
	}
	.lei .qi{
		background:url(../../static/image/icon2.png) no-repeat;
		background-color: #60b77f;
		background-position: -350px -2px;
	}
</style>
