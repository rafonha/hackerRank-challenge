function jumpingOnTheClouds1(c) {
    var jumps = 0;

    for (let i = 0; i < c.length; i++) {
        if(c[i+2] === 0){
            jumps++
            i++
        } else if(c[i+1] === 0){
            jumps++
        } 
    }
    
    return jumps;
}

var c = [0,0,1,0,0,1,0];

console.log(jumpingOnTheClouds1(c));