<template>
  <div class="cha">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'cha',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      qielei:"",
      arr:[]
    }
  },
  methods:{
    qiehuan:function(a){
       this.qielei=a;
       this.$router.push({path:"/fenlei",query:{id:this.qielei} })
    }
  },
  created(){
    var that=this
    axios.get("../static/cha.json").then(function(res){
      that.arr=res.data
    })
  }
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
	.cha .lei{
		width: 100%;
		display: flex;
		flex-wrap:wrap;
	}
	.cha .lei li{
		width: 18%;
		height: 30px;
		border:1px solid;
		line-height: 30px;
		text-align: center;
		margin: 3px;
	}
</style>
