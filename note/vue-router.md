### 基本

- 导航组件

  - router-link

    - 路由的跳转组件

    - 最后会被渲染成a标签. 
  
    -  当对应的路由匹配成功，将自动设置 class 属性值 `.router-link-active`

    - 可以用

      ```
      <a href="/#/test">测试</a>
      ```
  
      模拟实现
  
  - router-view
  
    - 路由的展示组件
  
- 声明路由

  - 定义路由组件

    - template

    - ```
      eg:const Foo = { template: '<div>foo</div>' }
      ```

    - 

  - 定义路由

    - ```js
      const routes = [
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
      ]
      ```

    - 每个路由应该映射一个组件,其中,component可以是通过Vue.extend()创建的组件构造器,或者只是一个组件配置对象.

  - 创建router实例并传递routes配置

    - ```js
      const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
      })
      ```

  - 创建和挂载根实例

    - 通过 router 配置参数注入路由

    -  通过注入路由器，我们可以在任何组件内通过 `this.$router` 访问路由器，也可以通过 `this.$route` 访问当前路由 

    - ```js
      const app = new Vue({
        router
      }).$mount('#app')
      ```