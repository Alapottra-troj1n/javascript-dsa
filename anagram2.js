function anagram2(arr1,arr2){

    if(arr1.length !== arr2.length){
        return false
    };

    let counter = {};

    for(let value of arr1){

        counter[value] ? counter[value]+= 1 : counter[value] = 1
    }

    for(let value of arr2){
        if(!counter[value]){
            return false
        }else{
            counter[value]--
        }
        console.log(counter)
    }

    return true
   
    

}


console.log(anagram2('hello','elloh'))