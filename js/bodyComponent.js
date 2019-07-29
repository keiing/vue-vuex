let bodyComponent = (function () {
    let template =
        `<div style='text-align:center;'>
                    {{tasks}}
            <body-children-component></body-children-component>
                </div>`;
    Vue.component("bodyComponent", {
        template,
        data() {
            return {
                tasks: "全局子组件"
            }
        },
        components: {
            //在这里注册
            bodyChildrenComponent
        }
    })
})()