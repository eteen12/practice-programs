const word = "salamander"

const object = {}

for(i = 0; i < word.length; i++){
    const char = word[i];

    if(object[char]){
        object[char] += 1;
    }else{
        object[char] = 1;
    }
}

console.log(object)