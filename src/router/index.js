import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Fen from "@/components/fenlei"
import Car from "@/components/car"
import Vip from "@/components/vip"
import jian from "@/components/jian"
import rou from "@/components/rou"
import re from "@/components/re"
import newp from "@/components/newp"
import qi from "@/components/qi"
import cha from "@/components/cha"
import jiu from "@/components/jiu"
import bao from "@/components/bao"
import xiu from "@/components/xiu"
import  gan from "@/components/gan"
import  chu from "@/components/chu"
import  liang from "@/components/liang"
import  qiT from "@/components/qiT"
import  zhu from "@/components/zhu"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
            {
              path: '/',
              name: 'jian',
              component: jian
            },
            {
              path: '/rou',
              name: 'rou',
              component: rou
            },
            {
              path: '/re',
              name: 're',
              component: re
            },
            {
              path: '/newp',
              name: 'newp',
              component: newp
            },
            {
              path: '/qi',
              name: 'qi',
              component: qi
            }

      ]
    },
    {
    	path:"/fenlei",
    	name:"Fen",
    	component:Fen,
      children:[
            {
              path: '/fenlei',
              name: 'cha',
              component: cha
                    
            },
            {
              path: '/Fjiu',
              name: 'jiu',
              component: jiu
            },
            {
              path: '/Fbao',
              name: 'bao',
              component: bao
            },
            {
              path: '/Fxiu',
              name: 'xiu',
              component: xiu
            },
            {
              path: '/chu',
              name: 'chu',
              component: chu
            },{
              path: '/liang',
              name: 'liang',
              component: liang
            },
            {
              path: '/qiT',
              name: 'qiT',
              component: qiT
            },
            {
              path: '/gan',
              name: "gan",
              component: gan
            }
          
      ]
    },
    {
    	path:"/car",
    	name:"Car",
    	component:Car
    },
    {
    	path:"/vip",
    	name:"Vip",
    	component:Vip
    },
    {
      path:"/zhu",
      name:"zhu",
      component:zhu
    }
    
  ]
})