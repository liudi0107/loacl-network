<!-- 分类主页面内容 -->
<template>
  <div class="fenlei animated bounceInLeft">
   		<div class="head">
   			<span @click="tui()" class="tui"></span>
   			<h2>商品列表</h2>
            
   		</div>
   		<!-- 拖跩效果 -->
   		<div class="tuo">
   			<ul class="ul1" id="drag" >
	   			<li v-for="obj in arr1" ref="guolvqi" @click="guolv(obj.lv)"> 
	   				<router-link :to="obj.to" :active-class="obj.dao1">{{obj.lei}}</router-link>
	   			</li>
   			</ul>
   		</div>
   		<!-- 拖拽下的切换 -->
   		<router-view></router-view>

   		<ul class="paixu">
   			<li v-for="(obj,$index) in arr2" :active-class="obj.dao1">
   				<a @click="qie(obj.ordey)">{{obj.lei}}</a>  				
   			</li>
   		</ul>
         <!-- 通过搜索进行筛选 -->
   		<div v-show="show">
   			<dl v-for="obj in filterBy(arr4,obj1)" class="zhan">
   				<dt>
   					<img :src="obj.img" alt="">
   				</dt>
   				<dd>
   					<p>{{obj.p}}</p>
   					<p>价格：{{obj.jia}}元</p>
   					<p>最近销量： <span>{{obj.num}}件</span></p>
                  <p>人气：{{obj.ren}}</p>
                  
   				</dd>  				
   			</dl>
   		</div>
         <!-- 通过点击显示 -->
         <div v-show="show1" >
            <dl v-for="obj in filterBy(arr5)" class="zhan">
               <dt>
                  <img :src="obj.img" alt="">
               </dt>
               <dd>
                  <p>{{obj.p}}</p>
                  <p>价格：{{obj.jia}}</p>
                  <p>{{obj.cheng}}<span>{{obj.num}}</span></p>
                  <p>人气：{{obj.ren}}</p>
                  
               </dd>  
            </dl>
         </div>
         <div v-show="show2" >
            <dl v-for="obj in filterBy(arr5,obj2)" class="zhan">
               <dt>
                  <img :src="obj.img" alt="">
               </dt>
               <dd>
                  <p>{{obj.p}}</p>
                  <p>价格：{{obj.jia}}</p>
                  <p>{{obj.cheng}}<span>{{obj.num}}</span></p>
                  <p>人气：{{obj.ren}}</p>
                  
               </dd>  
            </dl>
         </div>
  </div>
</template>

<script>
import animate from 'animate.css'
import $ from "@/assets/jquery-3.2.1.min.js"

export default {
  name:'fenlei',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      orderBy1:"jia",
      show:true,
      show1:false,
      show2:false,
      // 搜索的OBJ
      obj1:"",
      // 点击的OBJ
      obj2:"",
      arr1:[
      	{
      		lei:"茶叶",
      		to:"/fenlei",
      		dao1:"dao",
            lv:"茶"

      	},
      	{
      		lei:"酒/饮料",
      		to:"/Fjiu",
      		dao1:"dao",
            lv:"酒"
      	},
      	{
      		lei:"保健食品",
      		to:"/Fbao",
      		dao1:"dao",
             lv:"保健"
      	},
      	{
      		lei:"休闲食品",
      		to:"/Fxiu",
      		dao1:"dao",
             lv:"休闲"
      	},
      	{
      		lei:"干货特产",
      		to:"/gan",
      		dao1:"dao",
             lv:"干货"
      	},
      	{
      		lei:"厨房调料",
      		to:"/chu",
      		dao1:"dao",
             lv:"厨房"
      	},
      	{
      		lei:"粮油米面",
      		to:"/liang",
      		dao1:"dao",
             lv:"米"
      	},
      	{
      		lei:"其他",
      		to:"/qiT",
      		dao1:"dao",
             lv:"其他"
      	}

      ],
        arr2:[
      	{
      		lei:"销量排序",
      		to:"/fenlei",
      		dao1:"paiC",
      		to:"/fenlei",
            ordey:"num"
      	},
      	{
      		lei:"人气排序",
      		to:"/Fjiu",
      		dao1:"paiC",
      		to:"/renqi",
            ordey:"ren"


      	},
      	{
      		lei:"价格排序",
      		to:"/Fjiu",
      		dao1:"paiC",
      		to:"/jiage",
             ordey:"jia"
      	}

      ],
      arr3:[
      	{
      		img:"../../static/image/201505251040437065-100-100.jpg",
      		p:"贵州 贵州名酒 曹国酒  质地纯净 饮后余香 500ml",
      		jia:"300.00",
      		cheng:"最近成交",
      		num:"2771",
            ren:20
      	},
      	{
      		img:"../../static/image/201506121743261956-100-100.jpg",
      		p:"湖南 疯狂渔夫 鱼下巴 麻辣鱼骨头 鱼嘴巴 鱼 200g",
      		jia:"30.00",
      		cheng:"最近成交",
      		num:"2248",
            ren:67
      	},
      	{
      		img:"../../static/image/201506191035102387-100-100.jpg",
      		p:"黑龙江 五常大米 稻花香米 纯正新米 真空包装  2.5kg",
      		jia:"50.00",
      		cheng:"最近成交",
      		num:"1481",
            ren:66

      	},
      	{
      		img:"../../static/image/201506121733204397-100-100.jpg",
      		p:"湖南 疯狂渔夫 超越牛肉 休闲食品 麻辣 148g",
      		jia:"50.00",
      		cheng:"最近成交",
      		num:"1481",
            ren:644
      	},
      	{
      		img:"../../static/image/201502111735482525-100-100.jpg",
      		p:"新疆 汇果洲 巴旦木仁 新疆 厨房 坚果 美味 零食 保健食品 225g",
      		jia:"30.00",
      		cheng:"最近成交",
      		num:"1091",
            ren:8
      	},   
         {
               img:"static/image/201501201623421459-200-200.jpg",
               p:"西域老汉· 盒装碧根果美国 年货长寿果坚果干果零食特产厂家批发205g T",
               jia:"22.80",
              num:1,
              ren:11
         },
         {
            img:"static/image/201501201601433359-200-200.jpg",
            p:"西域老汉·盒装葡萄干新疆 保健食品 年货无核提子特级树上黄特产厂家批发205g T",
            jia:"19.80",
              num:2,
              ren:1155
         },
         {  
            img:"static/image/201501231659044924-200-200.jpg",
            p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×2包 T",
            jia:"59.60",
              num:3,
              ren:123145
         },
         {
            img:"static/image/201501231643347618-200-200.jpg",
            p:"西域老汉· 碧根果年货长寿果坚果干果零食特产厂家批发205g×2包 T",
            jia:"45.60",
              num:4,
              ren:11111
         },
         {
            img:"static/image/201501201620269247-200-200.jpg",
            p:"西域老汉·开心果美国年货坚果干果特级自然开无漂白厂家205g×2包 T",
            jia:"63.60",
             num:5,
             ren:23214
         },
            {
            img:"static/image/201501201640018928-200-200.jpg",
            p:"西域老汉·盒装开口杏核新疆年货坚果零食特产蔚县小银杏厂家批发205g T",
            jia:"11.80",
              num:6,
              ren:1425
         },
         {
            img:"static/image/201501231633006149-200-200.jpg",
            p:"西域老汉·盒装开心果美国年货坚果干果特级大籽自然开无漂白厂家205g T",
            jia:"31.80",
           num:7,
           ren:1422
         },
         {
            img:"static/image/201501231659044924-200-200.jpg",
            p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×3包 T",
            jia:"89.40",
              num:8,
              ren:1234
         },
         {
            img:"static/image/201501231706277161-200-200.jpg",
            p:"西域老汉·巴旦木新疆年货干果薄壳大杏仁扁桃仁特产厂家205g×2包 保健食品T",
            jia:"37.60",
              num:9,
              ren:64
         },
         {
            img:"static/image/201501201615075003-200-200.jpg",
            p:"西域老汉·盒装夏威夷果澳洲年货坚果干果零食特产厂家批发开口器205g T ",
            jia:"22.80",
              num:10,      
              ren:4444
         },
         {
             img:"static/image/201501201631336363-200-200.jpg",
            p:"西域老汉·盒装开口大榛子美国年货坚果干果零食东北特产厂家批发205g T",
            jia:"18.80",
             num:11,
              ren:642275
         },
         {
            img:"static/image/201501260953196418-200-200.jpg",
            p:"西域老汉·金福满堂C过年货大礼包干果零食特产厂家代理批发1230g T",
            jia:"198.00",
              num:12,
              ren:6411
         }

      ],
      arr6:[
         {
            img:"../../static/image/201505251040437065-100-100.jpg",
            p:"贵州 贵州名酒 曹国酒  质地纯净 饮后余香 500ml",
            jia:"300.00",
            cheng:"最近成交",
            num:"2771",
            ren:20
         },
         {
            img:"../../static/image/201506121743261956-100-100.jpg",
            p:"湖南 疯狂渔夫 鱼下巴 麻辣鱼骨头 鱼嘴巴 鱼 200g",
            jia:"30.00",
            cheng:"最近成交",
            num:"2248",
            ren:67
         },
         {
            img:"../../static/image/201506191035102387-100-100.jpg",
            p:"黑龙江 五常大米 稻花香米 纯正新米 真空包装  2.5kg",
            jia:"50.00",
            cheng:"最近成交",
            num:"1481",
            ren:66

         },
         {
            img:"../../static/image/201506121733204397-100-100.jpg",
            p:"湖南 疯狂渔夫 超越牛肉 休闲食品 麻辣 148g",
            jia:"50.00",
            cheng:"最近成交",
            num:"1481",
            ren:644
         },
         {
            img:"../../static/image/201502111735482525-100-100.jpg",
            p:"新疆 汇果洲 巴旦木仁 新疆 厨房 坚果 美味 零食 225g",
            jia:"30.00",
            cheng:"最近成交",
            num:"1091",
            ren:8
         },
         {
               img:"static/image/201501201623421459-200-200.jpg",
               p:"西域老汉· 盒装碧根果美国 保健食品 干货长寿果坚果干果零食特产厂家批发205g T",
               jia:"22.80",
              num:1,
              ren:11
         },
         {
            img:"static/image/201501201601433359-200-200.jpg",
            p:"西域老汉·盒装葡萄干新疆 保健食品 干货无核提子特级树上黄特产厂家批发205g T",
            jia:"19.80",
              num:2,
              ren:1155
         },
         {  
            img:"static/image/201501231659044924-200-200.jpg",
            p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×2包 T",
            jia:"59.60",
              num:3,
              ren:123145
         },
         {
            img:"static/image/201501231643347618-200-200.jpg",
            p:"西域老汉· 碧根果年货长寿果坚果干果零食特产厂家批发205g×2包 T",
            jia:"45.60",
              num:4,
              ren:11111
         },
         {
            img:"static/image/201501201620269247-200-200.jpg",
            p:"西域老汉·开心果美国年货坚果干果特级自然开无漂白厂家205g×2包 T",
            jia:"63.60",
             num:5,
             ren:23214
         },
            {
            img:"static/image/201501201640018928-200-200.jpg",
            p:"西域老汉·盒装开口杏核新疆年货坚果零食特产蔚县小银杏厂家批发205g T",
            jia:"11.80",
              num:6,
              ren:1425
         },
         {
            img:"static/image/201501231633006149-200-200.jpg",
            p:"西域老汉·盒装开心果美国年货坚果干果特级大籽自然开无漂白厂家205g T",
            jia:"31.80",
              num:7,
              ren:1422
         },
         {
            img:"static/image/201501231659044924-200-200.jpg",
            p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×3包 T",
            jia:"89.40",
              num:8,
              ren:1234
         },
         {
            img:"static/image/201501231706277161-200-200.jpg",
            p:"西域老汉·巴旦木新疆年货干果薄壳大杏仁扁桃仁特产厂家205g×2包 T",
            jia:"37.60",
              num:9,
              ren:64
         },
         {
            img:"static/image/201501201615075003-200-200.jpg",
            p:"西域老汉·盒装夏威夷果澳洲年货坚果干货零食特产厂家批发开口器205g T ",
            jia:"22.80",
              num:10,      
              ren:4444
         },
         {
             img:"static/image/201501201631336363-200-200.jpg",
            p:"西域老汉·盒装开口大榛子美国年货坚果干货零食东北特产厂家批发205g T",
            jia:"18.80",
             num:11,
              ren:642275
         },
         {
            img:"static/image/201501260953196418-200-200.jpg",
            p:"西域老汉·金福满堂C过年货大礼包干货零食特产厂家代理批发1230g T",
            jia:"198.00",
              num:12,
              ren:6411
         },
         { 
            p:"2015年大益 春圆 1501批 普洱生茶 357克",
            img:"static/image/shu-1.jpg",
            num:12,
            ren:61,
            jia:"230.00"
         },
         {
      
            p:"2017年下关 传承FTT53-17(铁饼)生茶 357克/饼",
            img:"static/image/shu-2.jpg",
            jia:"198.00",
           num:12,
           ren:641
         }
      ],
      arr4:[
         {
            img:"../../static/image/201505251040437065-100-100.jpg",
            p:"贵州 贵州名酒 曹国酒  质地纯净 饮后余香 500ml",
            jia:"300.00",
            cheng:"最近成交",
            num:"2771",
            ren:20
         },
         {
            img:"../../static/image/201506121743261956-100-100.jpg",
            p:"湖南 疯狂渔夫 鱼下巴 麻辣鱼骨头 鱼嘴巴 鱼 200g",
            jia:"30.00",
            cheng:"最近成交",
            num:"2248",
            ren:67
         },
         {
            img:"../../static/image/201506191035102387-100-100.jpg",
            p:"黑龙江 五常大米 稻花香米 纯正新米 真空包装  2.5kg",
            jia:"50.00",
            cheng:"最近成交",
            num:"1481",
            ren:66

         },
         {
            img:"../../static/image/201506121733204397-100-100.jpg",
            p:"湖南 疯狂渔夫 超越牛肉 休闲食品 麻辣 148g",
            jia:"50.00",
            cheng:"最近成交",
            num:"1481",
            ren:644
         },
         {
            img:"../../static/image/201502111735482525-100-100.jpg",
            p:"新疆 汇果洲 巴旦木仁 新疆 厨房 坚果 美味 零食 225g",
            jia:"30.00",
            cheng:"最近成交",
            num:"1091",
            ren:8
         },
         {
               img:"static/image/201501201623421459-200-200.jpg",
               p:"西域老汉· 盒装碧根果美国 保健食品 干货长寿果坚果干果零食特产厂家批发205g T",
               jia:"22.80",
              num:1,
              ren:11
         },
         {
            img:"static/image/201501201601433359-200-200.jpg",
            p:"西域老汉·盒装葡萄干新疆 保健食品 干货无核提子特级树上黄特产厂家批发205g T",
            jia:"19.80",
              num:2,
              ren:1155
         },
         {  
            img:"static/image/201501231659044924-200-200.jpg",
            p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×2包 T",
            jia:"59.60",
              num:3,
              ren:123145
         },
         {
            img:"static/image/201501231643347618-200-200.jpg",
            p:"西域老汉· 碧根果年货长寿果坚果干果零食特产厂家批发205g×2包 T",
            jia:"45.60",
              num:4,
              ren:11111
         },
         {
            img:"static/image/201501201620269247-200-200.jpg",
            p:"西域老汉·开心果美国年货坚果干果特级自然开无漂白厂家205g×2包 T",
            jia:"63.60",
             num:5,
             ren:23214
         },
            {
            img:"static/image/201501201640018928-200-200.jpg",
            p:"西域老汉·盒装开口杏核新疆年货坚果零食特产蔚县小银杏厂家批发205g T",
            jia:"11.80",
              num:6,
              ren:1425
         },
         {
            img:"static/image/201501231633006149-200-200.jpg",
            p:"西域老汉·盒装开心果美国年货坚果干果特级大籽自然开无漂白厂家205g T",
            jia:"31.80",
              num:7,
              ren:1422
         },
         {
            img:"static/image/201501231659044924-200-200.jpg",
            p:"西域老汉·开口松子年货坚果干果休闲零食特产厂家批发205g×3包 T",
            jia:"89.40",
              num:8,
              ren:1234
         },
         {
            img:"static/image/201501231706277161-200-200.jpg",
            p:"西域老汉·巴旦木新疆年货干果薄壳大杏仁扁桃仁特产厂家205g×2包 T",
            jia:"37.60",
              num:9,
              ren:64
         },
         {
            img:"static/image/201501201615075003-200-200.jpg",
            p:"西域老汉·盒装夏威夷果澳洲年货坚果干货零食特产厂家批发开口器205g T ",
            jia:"22.80",
              num:10,      
              ren:4444
         },
         {
             img:"static/image/201501201631336363-200-200.jpg",
            p:"西域老汉·盒装开口大榛子美国年货坚果干货零食东北特产厂家批发205g T",
            jia:"18.80",
             num:11,
              ren:642275
         },
         {
            img:"static/image/201501260953196418-200-200.jpg",
            p:"西域老汉·金福满堂C过年货大礼包干货零食特产厂家代理批发1230g T",
            jia:"198.00",
              num:12,
              ren:6411
         },
         { 
            p:"2015年大益 春圆 1501批 普洱生茶 357克",
            img:"static/image/shu-1.jpg",
            num:12,
            ren:61,
            jia:"230.00"
         },
         {
      
            p:"2017年下关 传承FTT53-17(铁饼)生茶 357克/饼",
            img:"static/image/shu-2.jpg",
            jia:"198.00",
           num:12,
           ren:641
         }
      ],
      filterText:""
    
  }

   
},
created(){ 
    this.obj1=this.$router.history.current.query.id
},
methods:{
	tui:function(){
		this.$router.go(-1)
	},
   qie:function(orderName){
    // console.log(orderName)
      this.orderBy1=orderName
   },
   guolv:function(a){
      this.obj2=a;
      // console.log(a)
      this.show=false;
      this.show1=false;
      this.show2=true;
      // $("#show1").addC
      // lass('animated bounceInLeft')
   }

},
computed:{
   arr5:function(){
      var arg =this.orderBy1;
    
      return this.arr3.sort(function(a,b){
         return a[arg]-b[arg]
      })
   }

}


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	*{
		margin: 0;
		padding: 0;
		box-sizing:border-box;
		list-style: none; 

	}

	a{
		color: black;
	}
	.head{
		width: 100%;
		height: 49px;
		background: #22292c;
		display: flex;
		color: white;
		position: relative;
	}
   .head .tui{
   width: 19px;
    height: 100%;
    background: url(/static/img/jd.54763dd.png) no-repeat;
    background-size: 273px;
    position: absolute;
    left: 0%;
    background-position: -35px 12px

  }

	.head span{
		font-size: 45px;
		margin-left: 5%
	}
	.head h2{
		margin:auto;
	}
	.tuo{
		width: 100%;
		overflow: hidden;
		position: relative;
      /*加上一个滚动条*/
       overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
     

	}
  /*去除滚动条的显示，伪类的写法*/
  .tuo::-webkit-scrollbar{ display:none;}
     
  
	.fenlei .ul1{
		width: 150%;
		height: 49px;
		background: #f8f8f8;
		line-height: 49px;
		list-style: none;
		display: flex; 
     overflow-x: scroll; 
      -webkit-overflow-scrolling: touch;
      white-space: nowrap;
     /* ::-webkit-scrollbar{ display:none;}*/
           
	}
	.fenlei .ul1 li{
		width: 40%;

	}
	.fenlei .ul1 li a{
		text-decoration: none;
    height: 48px;
    display: inline-block;
	}
	.dao{
		border-bottom: 3px solid red;
		color: red;
		padding-bottom: 15px;
	}
	.fenlei .paixu{
		width: 100%;
		display: flex;
	}
	.fenlei .paixu li {
		width: 33%;
		height: 30px;
		line-height: 30px;
		background-color:rgba(198, 255, 0, 0.86);
	}
	.fenlei .paixu li a{
		text-decoration: none;
      height: 100%;
      width: 100%;
      display: inline-block;
      line-height: 35px;

	}
	.paiC{
		background-color:green;
	}
	.zhan{
		display: flex;
		/*height: 100px;*/
		border:1px solid #ccc;
		padding:10px 0 10px 0; 
	}
	.zhan dt img{
		margin:5px;
      width: 100px;
      height: 100px;
	}
	.zhan dd p {
		margin-top: 5px;
	}
	.zhan dd p:nth-child(2){
		color:red;
	}
	dd{
		text-align: left;
	}
</style>











