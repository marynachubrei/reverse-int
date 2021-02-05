module.exports = function reverse (n) {
    let m
    if(n>0){ m = 1}else{ m = -1}
    return +(m*n).toString().split('').reverse().join('')
   
}
