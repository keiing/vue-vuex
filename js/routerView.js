// 配置路由
let router = (function () {
    let index = {
        template: `
            <div style='text-align:center;'>
                <h2 style="color:orange">这里是首页</h2><br>
                <router-link to="/">首页</router-link></br>
                <body-component></body-component>
                <router-link to="/body">详情页</router-link></br>
                <router-link :to="/products/+this.$store.state.a">详情页传参</router-link>
                {{this.$store.state}}
            </div>
            `
    }
    //3.创建路由字典
    var routes = [
        { path: "/", component: index },
        { path: "/body", component: bodyChildrenComponent },//是否允许传参
        { path: "/products/:two", component: bodyChildrenComponent, props: true }
    ];
    //4.创建路由器,装入路由字典
    var router = new VueRouter({ routes });
    return router
    //5.将路由字典装入new Vue
    //进入 <script src="vue.js"> 页面配置
})();