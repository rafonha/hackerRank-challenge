function matchingStrings(strings, queries) {
    var match = [];

    queries.forEach(e => {
        let stringOnQuery = strings.filter(q => q === e);
        if (stringOnQuery.length > 0){
            match.push(stringOnQuery.length)
        } else {
            match.push(0);
        }

    });

    return match;
}

var strings = ['ab','ab', 'abc'];
var queries =['ab', 'abc', 'bc'];

console.log(matchingStrings(strings, queries))