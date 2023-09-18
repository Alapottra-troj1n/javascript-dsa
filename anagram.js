function checkAnagram(str1,str2){

    if(str1.length !==str2.length){
        return false;
    }

    let input1 = {};
    let input2 = {};

    for(let value of str1 ){
        input1[value] = (input1[value]||0) + 1;
    }
    for(let value of str2){
        input2[value] = (input2[value] || 0) + 1;
    }
    
    for(let key in input1){

      if(!(key in input2)){
        return false;
      }

      if(input1[key] !== input2[key]){
        return false
      }

    }

    return true


};

console.log(checkAnagram('',''))