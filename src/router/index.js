import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CircleGrowWithoutFollow from '@/components/CircleGrowWithoutFollow'
import NormalCircle from '@/components/NormalCircle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cgwof',
      name: 'CircleGrowWithoutFollow',
      component: CircleGrowWithoutFollow
    },
    {
      path: '/normalCircle',
      name: 'NormalCircle',
      component: NormalCircle
    }
  ]
})
