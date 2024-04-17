function repeatedString1(s, n) {
    var count = 0;
    var stringArray = s.split('');
    var countOnString = stringArray.filter(a => a === 'a');

    if(!stringArray.includes('a')){
        return 0;
    }
    if (stringArray.length === 1) {
        return n;
    } 

    var fullValue = parseInt((n / stringArray.length))
    var total = parseInt(fullValue * countOnString.length);
    var rest = n % s.length;
    for (let i = 0; i < rest; i++) {
        if (s[i] === 'a') {
            count++
        }
    }

    return total + count;
}

function repeatedString2(s, n) {
    var matchArray = s.match(/a/g).length;
    var count = 0;
    var stringLength = s.length;

    if(n >= stringLength){
        var repeatTimes = parseInt(n / stringLength);
        count =  parseInt(repeatTimes * matchArray);
    }

    for (let i = 0; i < n % stringLength; i++) {
        if(s[i] === 'a') count++
    }
    
    return count;
}

// var s = 'aba';
// var n = 10;
var s = 'a';
var n = 10000000000;
// var s = 'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq';
// var n = 549382313570;

console.log(repeatedString2(s, n));