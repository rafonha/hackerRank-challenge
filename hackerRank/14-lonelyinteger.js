function lonelyInteger(a) {
    var lonely = 0;
    
    a.forEach(e => {
        var findLonely = a.filter(s => s === e);
        if (findLonely.length === 1){
            lonely = e;
        }
    })

    return lonely;
}

var a = [1,2,3,4,3,2,1];
console.log(lonelyInteger(a));