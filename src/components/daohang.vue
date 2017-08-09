<template>
  <div class="daohang">
   	<ul>
   		<li v-for="a in dao" >
   			<router-link :to="a.to"  active-class="aa" exact>
   				<p class="p1">{{a.p1}}</p>
   				<p class="p2">{{a.p2}}</p>	
   			</router-link>	
   		</li>
   		
   </ul>
   <router-view></router-view> 	
  </div>	
</template>

<script>
// import jian from "@/components/jian"
// import rou from "@/components/rou"

export default {
  name: 'daohang',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dao:[
    	{
    		p1:"坚果干货",
    		p2:"干货特产",
    		to:"/",
    		bian:"bian1",
    		activeClass:"hua1"
       

    		

    	},
    	{
    		p1:"肉类零食",
    		p2:"牛肉，羊肉",
    		to:"/rou",
    		bian:"bian1",
    		activeClass:"hua1"
       
    		
    	},
    	{
    		p1:"热销特产",
    		p2:"全场优大酬",
    		to:"/re"
       

    	},
    	{
    		p1:"新品推荐",
    		p2:"全场优惠大酬",
    		to:"/newp"
       
    	},
    	{
    		p1:"其他",
    		p2:"",
    		to:"/qi"
       
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
  .aa{
    background:#ccc;
    width: 100%;
    height: 100%;
   color: white;
   font-size: 20px;
    display: inline-block;
  }
	.daohang{
		margin-top:15px;
	}
	.daohang ul{ 
		width: 95%;
		display: flex;
		flex-wrap:wrap;
		list-style: none;
    justify-content: center;
	}
	.daohang ul li{
		width: 30%;
		height: 62px;
		border:1px solid #ccc;
	}
	.daohang ul li a{
		text-decoration: none;
		color: black;
		line-height: 29px;
	}
	.daohang ul li .p1{
		color: rgba(15, 0, 255, 0.61);
    font-size: 18px;
    font-weight: 600;
    line-height: 35px;
	}
	.daohang ul li .p2{
		color:#fe7c23;
		font-size: 15px;
	}
	.bian1{
		border:1px solid #ccc;
	}
	
	
</style>
	