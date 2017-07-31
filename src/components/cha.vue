<template>
  <div class="cha">
   	<ul class="lei">
   		<li v-for="obj in arr">{{obj.li}}</li>
   	</ul>
  </div>
</template>

<script>
export default {
  name: 'cha',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[
      		{
      			li:"花草茶"
      		},
      		{
      			li:"绿茶"
      		},
      		{
      			li:"黑茶"
      		},
      		{
      			li:"乌龙茶"
      		},
      		{
      			li:"红茶"
      		},
      		{
      			li:"白茶"
      		},
      		{
      			li:"名茶套装"
      		},
      		{
      			li:"其他名茶"
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
