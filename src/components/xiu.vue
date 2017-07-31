<template>
  <div class="xiu">
  		<ul class="lei">
        <li v-for="obj in arr">{{obj.li}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'xiu',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[
          {
            li:"饼干膨化食品"
          },
          {
            li:"坚果炒货"
          },
          {
            li:"蜜饯果干"
          },
          {
            li:"肉类零食"
          },
          {
            li:"巧克力"
          },
          {
            li:"海味即食"
          },
          {
            li:"糖果果冻"
          },
          {
            li:"乳制品"
          },
          {
            li:"其他"
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
   .lei{
    width: 100%;
    display: flex;
    flex-wrap:wrap;
  }
   .lei li{
    width: 28%;
    height: 30px;
    border:1px solid;
    line-height: 30px;
    text-align: center;
    margin: 3px;
  }
</style>
