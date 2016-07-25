// 对象copy函数
function extend(obj1, obj2) {
    for (var key in obj2) {
        obj1[key] = obj2[key];
    }
}
/**
 * 
 * @param angle 旋转角度
 */
function angle(angle) {
    return  angle * Math.PI /180;
}