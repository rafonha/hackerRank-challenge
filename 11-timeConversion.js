function timeConversion1(s) {
    var newTime = s.slice(0,8).split(':');
    if (s.includes('AM')){
        if (newTime[0] === '12'){
            newTime[0] = '00';
            console.log(newTime);
            return newTime.toString().replaceAll(',',':');
        }
        return s.slice(0,8);
    }
    if (newTime[0] === '12'){
        return newTime.toString().replaceAll(',',':');
    }

    newTime[0] = parseInt(newTime[0]) + 12;
    
    return newTime.toString().replaceAll(',',':');

}

function timeConversion2(s) {
    
}

// var s = '07:05:45PM';
// var s = '07:05:45AM';
// var s = '12:05:45AM';
var s = '12:05:45PM';

console.log(timeConversion(s));