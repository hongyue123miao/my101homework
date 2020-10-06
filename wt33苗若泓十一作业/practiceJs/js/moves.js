
function moves(obj, target, callback) {
    clearInterval(timer)
    var timer = setInterval(() => {
        var step = (target - obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step) : Math.floor(step)
        if (obj.offsetLeft == target) {
            clearInterval(timer)
            if (callback) {
                callback()
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px'


    }, 20);



}
