
function countingValleys1(steps, path) {
    let valleys = 0;
    let level = 0;

    const eachPath = path.split('');

    for (let i = 0; i < steps; i++) {
        if (eachPath[i] === 'D'){
            level--;
        } else {
            if(level === -1){
                valleys++
            } 
            level++;
        }
    }

    return valleys;
}

const path = "UDDDUDUUDDUU"
const steps = 12;

console.log(countingValleys(steps, path));