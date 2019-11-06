import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Details from './views/Details'
import Products from './views/Products'
import NotFound from "./views/NotFound"
import Login from "./views/Login"

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/details",component:Details},
    {path:"/products",component:Products},
    {path:"/login",component:Login},
    {path:"*",component:NotFound}
  ]
})
