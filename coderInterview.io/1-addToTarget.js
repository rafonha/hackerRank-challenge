function contains1(word, random) {
    const arrRand = random.split('');
    const arrWord = word.split('');
    
    for (let i = 0; i < arrWord.length; i++){
      let hasLetter = arrRand.findIndex(value => value === arrWord[i]);
      
      if (hasLetter != -1){
        arrRand.splice(i,i)
      } else {
        return false
      }
    }
  
    return true;
}

const words = ["cat", "bob", "foo", "baby", "car"];
const rand = ["zDWaeecjpot", "atrfbnoaoqoqob", "bbbewqway", "efwecarqwef"];

words.forEach(word => {
    console.log(`${word}:`);
    
    rand.forEach(s => {
      console.log(contains1(word, s));
    });
});