function findMedian(arr) {
    arr.sort((a,b) => a-b);
    var median = Math.floor(arr.length / 2);

    return arr[median];
};

var arr = [1,4,3,2,5,6,8,7,9];
console.log(findMedian(arr))