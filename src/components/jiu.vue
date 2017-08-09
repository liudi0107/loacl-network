<template>
  <div class="jiu">
  </div>
</template>

<script>
export default {
  name: 'jiu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[
      		{
      			li:"酒类"
      		},
      		{
      			li:"冲饮类"
      		},
      		{
      			li:"饮料类"
      		},
      		{
      			li:"天然粉食品类"
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
		list-style: none;	
		box-sizing:border-box;
	}
	.jiu .lei{
		width: 100%;
		display: flex;
		flex-wrap:wrap;
	}
	.jiu .lei li{
		width: 18%;
		height: 30px;
		border:1px solid;
		line-height: 30px;
		text-align: center;
		margin: 3px;
	}
</style>
