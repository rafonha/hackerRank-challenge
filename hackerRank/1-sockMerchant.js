//using sort + for
function sockMerchant1(n, ar) {
    const sortedArr = ar.sort();
    let pairs = 0;

    for (let i = 0; i < n; i++) {
        if(sortedArr[i] === sortedArr[i+1]){
            pairs++;
            i++;
        }
    }

    return pairs;
}

// using reducer
function sockMerchant2(n, ar) {
    const socksByColor = ar.reduce((accumulator, sockColor) => {
        if (!accumulator[sockColor]) {
            accumulator[sockColor] = 0;
        }
        accumulator[sockColor] = accumulator[sockColor] + 1;
        return accumulator;
    }, {})

    console.log('socksByColor', socksByColor)
    
    const totalPairs = Object.keys(socksByColor).reduce((count, sockColor) => {
        const sockCount = socksByColor[sockColor];
        const pairSocks = Math.floor(sockCount / 2);
        return count + pairSocks;
    }, 0)

    return totalPairs;
}

//using hash
function sockMerchant3(n, ar) {
    const sockHashMap = {};
    let totalOfPairs = 0;

    ar.forEach((sockColor) => {
        if(!sockHashMap[sockColor]){
            sockHashMap[sockColor] = 1;
            return;
        }
        totalOfPairs++
        delete sockHashMap[sockColor];
    });

    return totalOfPairs;
}

//using set
function sockMerchant4(n, ar) {
    const s = new Set();
    const res = ar.reduce((pre, curr) => {
    if(s.has(curr)){
        s.delete(curr);
        return ++pre;
    }
    s.add(curr);
    return pre;
    }, 0);

    return res;
}

const ar = [1,2,2,1,3,2,1,2,1,1,2,3,3];
const n = ar.length;

console.log(sockMerchant3(n, ar));