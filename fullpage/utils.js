// 截流throtle  规定时间值执行一次
// debounce防抖  规定事件执行一次，后执行
// 都为解决高频事件而来， scroll mousewhell mousemover touchmove onresize

const utils = {
    // 帮忙method执行的次数在规定时间内只有一次
    // method执行时，函数内的this pullFullPage
    // this.container

    throtle(method,context,delay) {
        // 返回的函数就是等下事件执行的真正函数体
        // 闭包
        let wait = false;
        return function(...args) {
            // console.log(args)
            // args？ event 对象
            // 执行时，上下文环境要跟以前一样
            if(!wait) {
                wait = true;
                method.apply(context,args)
                setTimeout(()=>{
                    wait = false
                },delay)
            }
        }
    },

    debounce(method, context, event, delay) {
        // window.resize 等一下在执行
        // js 动态语言

        clearTimeout(method.tId)
        method.tId = setTimeout(() => {
            method.call(context, event);
        },delay)
       
    },

    getWheelDelta(event) {
        // console.log(event.wheelData)
        // console.log(event)
        if(event.wheelDelta) {
            this.getWheelDelta = event => event.wheelDelta;
            return event.wheelDelta;
        }
        // chrome
        this.getWheelDelta = event => -event.detail;
        return -event.detail;
    }
}