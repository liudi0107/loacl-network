<template>
  <div id="app">
    <router-view></router-view>
    <ul class="tebbar">
      <li>
        <router-link   to="/"  class="a1"  active-class="a5" >首页</router-link>
      </li>
      <li>
        <router-link to="/fenlei" class="a2"  active-class="a6">分页</router-link>
      </li>
      <li>
        <router-link to="/car" class="a3" active-class="a7">购物车</router-link>
      </li>
      <li>
        <router-link to="/vip" class="a4" active-class="a8">vip</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app'  
}
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
  font-size: 12px;
  line-height: 73px;
  background-position: left;
}
.tebbar .a1{
  background-position: 50% 4px;
}
.tebbar .a2{
  background-position:50% -50px;
}
.tebbar .a3{
  background-position:46% -105px;
}
.tebbar .a4{
  background-position:49% -149px;
}

.tebbar  .a5{
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
}
</style>
