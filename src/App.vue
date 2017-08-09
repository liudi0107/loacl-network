<template>
  <div id="app">
    <router-view></router-view>
    <ul class="tebbar">
      <li>
        <router-link   to="/"  class="a1"   >首页</router-link>
      </li>
      <li>
        <router-link to="/fenlei" class="a2"  >分页</router-link>
      </li>
      <li>
        <router-link to="/car" class="a3" >购物车</router-link>
      </li>
      <li>
        <router-link to="/geren" class="a4" >vip</router-link>
      </li>
    </ul>
  
  </div>
</template>

<script>
import animate from "@/assets/animate.min.css"
export default {
  name: 'app'  
}
  $(function(){
  $(".tebbar a").eq(0).css("color", "orange")
  $(".tebbar li").each(function(index){
      $(this).click(function(){       
        $(".tebbar a").css("color","")
         $(".tebbar a").eq(index).css("color","orange")
      })
  })



 })  

</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding: 0;
}
.tebbar{
  width: 100%;
  height: 44px;
  position:fixed;
  bottom: 0;
  display: flex;
  line-height: 44px;
  list-style: none;
  justify-content: space-around;
  background:#f9f9f9;
}

.tebbar li{
  width: 25%;
  height: 100%;
}
.tebbar li a{
  text-decoration: none;
  color:black;
  width: 100%;
  height: 100%;
  display: inline-block;
  background:url(../static/image/index_btn.png) no-repeat;
  font-size: 14px;
  line-height: 73px;
  background-position: left;
}

/*.a10{
  text-decoration: none;
  color:black;
  width: 100%;
  height: 100%;
  display: inline-block;
  background:url(../static/image/index_btn.png) no-repeat;
  font-size: 12px;
  line-height: 73px;
  background-position: left;
  background-position: 50% 4px;
  transtion:left 0.3 ease-out;
  color: green;
}
.a11{
   text-decoration: none;
  color:black;
  width: 100%;
  height: 100%;
  display: inline-block;
  background:url(../static/image/index_btn.png) no-repeat;
  font-size: 12px;
  line-height: 73px;
  background-position: left;

}*/

.tebbar .a1{
  background-position: 50% 4px;
  transtion:left 0.3 ease-out;
  }
.tebbar .a2{
  background-position:50% -50px;
  transtion:left 0.3 ease-out;
}
.tebbar .a3{
  background-position:46% -105px;
}
.tebbar .a4{
  background-position:49% -149px;
}

/*.tebbar  .a5{
  background-position: 50% -210px;
}
.tebbar  .a6{
  background-position: 50% -265px;
}
.tebbar  .a7{
  background-position: 46% -320px;
}
.tebbar  .a8{
  background-position: 49% -364px;
}*/

</style>
