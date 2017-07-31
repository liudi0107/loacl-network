<template>
  <div class="hello">
   	<tou></tou>
   	<lunbo></lunbo>
   	<lei></lei>
   	<daohang></daohang>
  </div>
  
</template>

<script>
import tou from "@/components/head"
import lunbo from "@/components/lunbo"
import lei from "@/components/lei"
import daohang from "@/components/daohang"
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    tou,
    lunbo,
    lei,
    daohang
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
	.hello{
		width: 100%;
	}
</style>
