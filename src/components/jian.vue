<template>
  <div class="jian">
      <router-link v-for="(a,$index) in jian" :to="a.path" class="jian1" >
   	<dl @click="dian(a.id)">
   		<dd>
   			<img :src="a.img" alt="">
   		</dd>
   		<dt>
   			<span>{{a.p}}</span><br/><span class="span1">{{a.span}}</span>
   		</dt>
   	</dl>

      </router-link>
       <a   href="javascript:void(0)"  v-show="scroll" @click="tiao()">
        <img src="../../static/image/top.jpg" alt="" class="top">
      </a>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
let hub =new Vue()
export default {
  name: 'jian',
  
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      scroll:false,
      jian:[],
    }
  },
      // 点击商品在跳转页面展示,产品对象中的id  1,2
  

  created(){
    var that=this
    axios.get("../static/jian.json").then(function(res){
      that.jian=res.data
    })
  },
  mounted(){
    // 1 先绑定 scroll 事件
        var map = {};
        window.onhashchange = function() {
            document.body.scrollTop = 0;
        }
        // window.addEventlister("")
        window.addEventListener('scroll', this.handleScroll);

        
        /*  2 再屏蔽掉浏览器自动恢复滚动位置行为带来的影响
            a 在 hashchange 时强制 document.body.scrollTop = 0
            b 在 scroll 事件里面, 当 document.body.scrollTop = 0 的时候不做 存操作.*/
        window.onscroll = function() {
            if (document.body.scrollTop) {
                // 存
                map[location.hash] = document.body.scrollTop;
            } else {
                var timer = null;
                //3 在读操作里面, 设置一个定时任务, 去判断 document.body.scrollTop 的值和你保存的位置是不是相同的
                timer = setInterval(function(){
                    if (document.body.scrollTop == map[location.hash]) {
                        clearInterval(timer);
                        map = {};
                    } else {
                        document.body.scrollTop = map[location.hash];
                    }
                }, 20);
            }
        }
        
    },

    methods:{
       dian:function(a) {
       console.log(a)    
          sessionStorage.setItem("uidd",a)     
       },
      handleScroll(){
        this.scroll=document.body.scrollTop>500;
      },
      tiao(){
          $("html,body").animate({
            scrollTop:0
          },"slow")

        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	.jian{
		display: flex;
		margin-top:5px;
		flex-wrap:wrap;
		margin-bottom: 60px;

	}
   .jian1{
      width: 50%;
      text-decoration: none;
      color: rgba(0, 0, 0, 0.77);
      text-align: left;
   }
	.jian dl{
		width: 100%;
		margin-top: 10px;
    border: 1px solid  #ccc;
	}
	.jian dl dd{
		width: 85%;
		margin: auto;
	}
	.jian dl dd img{
		width: 100%;
	}
	.jian dl dt{
		width: 85%;
		margin:auto;
	}
	.jian dl dt .span1{
		color: red;
     font-size: 20px;
	}
  .top{
  position: fixed;
  bottom:100px;
  right: 0;
}
</style>
