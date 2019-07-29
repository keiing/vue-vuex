let headerComponent = (function () {
    //vue.js 驼峰命名 写标签时 必须把驼峰变为 -
    let template =
        `<div style='text-align:center;'>
            <span style='color:red'>{{tasks}}</span><br/>
            vue传参props---{{one}}</div>
        `;
    //Vue.component('BodyComponent',路径) 全局注册 
    //路径可以是变量只要是指定文件位置
    Vue.component("headerComponent", {
        template,
        data() {
            return {
                tasks: '这是头页面'
            }
        },
        props: { one: { default: "" } }
    })
})()