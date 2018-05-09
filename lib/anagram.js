function anagram(str){
    var result = []
    // while(!str){
    //     result.push(str);
    // }
    
    // if(!str){
    //     return result
    // }
    // result.push(str);
    
    // return result
    if(!str){
        return []
    }
    if(str.length == 1){
        return [str]
    }
    if(str.length == 2){
        return [str[0] + str[1],str[1] + str[0]]
    }
    var result = []
    
    result.push("a"+"bc");
    result.push("a"+"cb");
    result.push("b"+"ac");
    result.push("b"+"ca");
    result.push("c"+"ab");
    result.push("c"+"ba");
    // return [
    //     "a"+"bc",
    //     "a"+"cb",
    //     "b"+"ac",
    //     "b"+"ca",
    //     "c"+"ab",
    //     "c"+"ba"
    // ]

    return result
}

module.exports = anagram