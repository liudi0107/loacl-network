<template>
  <div class="bao">
  		<ul class="lei">
        <li v-for="obj in arr">{{obj.li}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'bao',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
       arr:[
          {
            li:"减肥排毒"
          },
          {
            li:"蜂蜜类"
          },
          {
            li:"美容养颜"
          },
          {
            li:"补肾壮阳"
          },
          {
            li:"调节三高"
          },
          {
            li:"营养成分"
          },
          {
            li:"提高免疫"
          },
          {
            li:"传统滋补"
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
    width: 18%;
    height: 30px;
    border:1px solid;
    line-height: 30px;
    text-align: center;
    margin: 3px;
  }
</style>
