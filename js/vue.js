new Vue({
    el: "#app",
    store,
    router,
    data() {
        return {
            one: [1, 23, 4],
            two: 2,
            confirm1: false,
            isTabbar: false,
            stu: {
                i: 'nage',
                age: 18
            }
        }
    },
    methods: {
        handleClick() {
            this.one.splice(1, 1);
            console.log(this.one)
        }
    },
    computed: {
        getAge: function () {
            return this.isTabbar
        }
    },
    watch: {
        //使用计算属性监听
        // getAge: {
        //     handler(val) {
        //         console.log(val);
        //     }
        // },
        // 对象属性单独监听
        // "stu.age":(val, i)=>{
        //   //参数1修改后的值
        //   //参数2原值
        //   console.log(val, i)
        // }
        // 开启深度监听 只要是stu对象内的属性发生变化就会触发
        // stu: { //stu监听对象名
        //     handler(val, i) { //方法名 handler <-深度监听指定的方法
        //         console.log(String(JSON.stringify(i)));//对象
        //         console.log(i);//因为是对象保存的是地址
        //         //所以每次如果值改变之前打印的值都会改变
        //     },
        //     deep: true
        // }
    },
    created() {
        this.handleClick() //created中不会触发updated事件
        console.log(`刚生成data`, this)
    },
    mounted() {
        // this.handleClick() //触发修改事件
        console.log(`渲染完成`)
    },
    beforeUpdate() {
        if (confirm('确定要跳转？')) {
            alert('竟然想离开emmm-----有可能吗');
            this.$destroy(true)
        } else {
            alert('那就放你一马')
        }
    },
    updated() {
        //跳转或修改完成后触发
        console.log('你为什么要修改数据/为什么要跳转页面')
    },
    beforeDestroy() {
        alert('提示!提示!')
        console.log('就要销毁你的组件了吗，不考虑考虑吗·');
        this.confirm1 = confirm('考虑考虑给你个机会');
        if (this.confirm1) {
            alert('不会给你机会的')
        } else {
            alert('算你识相')
        }
    },
    destroyed() {
        console.log('啊!你的组件死了');
        if (this.confirm1) {
            alert('想跳转存在吗!不存在');
            console.log('无法跳转了吧，刷新试试')
            this.isTabbar = !this.isTabbar
        } else {
            alert('但是以防万一，我还是给你销毁了')
            console.log('无法跳转了吧，刷新试试')
        }
        this.isTabbar = true
    },
})