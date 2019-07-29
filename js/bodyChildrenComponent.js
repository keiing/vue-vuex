let bodyChildrenComponent = (function () {
    let bodyChildrenComponent = {
        template: `<div>bodyChildrenComponent下的第一个子组件页面<br>---接受到的参数{{two}}</div>`,
        props: ['two']
    }
    return bodyChildrenComponent
})()