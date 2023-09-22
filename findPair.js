function findPair(arr,targetSum){

    let left = 0;
    let right = arr.length - 1;

    while(left < right){

        let sum = arr[left] + arr[right];

        if(sum === targetSum){
            return [arr[left],arr[right]]
        }else if(sum < targetSum){
            left++
        }else{
            right--
        }

    }

}

console.log(findPair([2,3,5,10,14,16], 15))