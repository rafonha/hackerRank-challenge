function plusMinus1(arr) {
    var positive = 0;
    var negative = 0;
    var zero = 0;
    var positiveRatio = 0;
    var negativeRatio = 0;
    var zeroRatio = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            positive++
        }
        if(arr[i] < 0){
            negative++
        }
        if(arr[i] === 0){
            zero++
        }
    }

    positiveRatio = parseFloat(positive / arr.length).toPrecision(6);
    negativeRatio = parseFloat(negative / arr.length).toPrecision(6);
    zeroRatio = parseFloat(zero / arr.length).toPrecision(6);
    
    return console.log(`${positiveRatio}\n${negativeRatio}\n${zeroRatio}`);
}

function plusMinus2(arr) {
    const ratioArr =  arr.reduce((groupedRatio, value) => {
        if(value > 0){
            groupedRatio[0]++
        }
        if(value < 0){
            groupedRatio[1]++
        }
        if(value === 0){
            groupedRatio[2]++
        }
        return groupedRatio;
    }, [0,0,0]);

    return ratioArr.forEach(e => {
        console.log(parseFloat(e / arr.length).toPrecision(6));
    });
}

// var arr = [1, 1, 0, -1, -1];
var arr = [-4, 3, -9, 0, 4, 1];
plusMinus2(arr);