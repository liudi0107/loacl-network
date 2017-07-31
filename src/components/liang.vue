<template>
  <div class="liang">
  	<ul class="lei">
        <li v-for="obj in arr">{{obj.li}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'liang',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[
          {
            li:"谷物类"
          },
          {
            li:"面粉类"
          },
          {
            li:"面食类"
          },
          {
            li:"食用油"
          },
          {
            li:"熟食\肉类"
          },
          {
            li:"豆类"
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
