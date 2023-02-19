// 节流函数--n秒内只执行一次，若重复触发，只有一次生效
const throttle = function (fn, delay = 500) {
    let timer = null;
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay)
        }
    }
}

// 防抖函数--n秒后执行事件，若在n秒内重复触发，则重新计时
const debounce = function (fn, delay = 500) {
    let timer = null;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}