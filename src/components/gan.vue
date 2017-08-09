<template>
  <div class="gan">
  </div>
</template>

<script>
export default {
  name: 'gan',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      arr:[
          {
            li:"食用菌"
          },
          {
            li:"南北干货"
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
