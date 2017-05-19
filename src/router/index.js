import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import Foo from '@/components/Foo'
// import Child from '@/components/Child'
// import Child2 from '@/components/Child2'
// import Child3 from '@/components/Child3'
// import Post from '@/components/Post'


const Foo = resolve => require(['@/components/Foo.vue'],resolve)
const Child = resolve => require(['@/components/Child.vue'],resolve)
const Child2 = resolve => require(['@/components/Child2.vue'],resolve)
const Child3 = resolve => require(['@/components/Child3.vue'],resolve)
const Post = resolve => require(['@/components/Post.vue'],resolve)

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      beforeEnter: (to, from, next) => {
        next();
      }
    },    {
      path: '/Foo/:id/:username',
      name: 'Foo',
      component: Foo,
      children: [
        {
          name:'profile',
          path: 'profile',
          components:{
            default:Child,
            a:Child2,
            b:Child3
          }
        }
      ]
    },{
      path:'/post/:id',
      name:'post',
      component:Post
    }
  ]
})
router.beforeEach((to,from,next) =>{
  next();
})
export default router
