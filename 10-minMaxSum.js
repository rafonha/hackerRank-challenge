function miniMaxSum(arr) {
    arr.sort((a,b) => a-b);
    
    var min = arr.slice(0,4).reduce((sum, value) => sum + value, 0);
    var max = arr.slice(1,5).reduce((sum, value) => sum + value, 0);
    
    return console.log(`${min} ${max}`);
}

var arr = [1,2,3,4,5];
console.log(miniMaxSum(arr));