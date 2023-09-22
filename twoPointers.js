function sumZero(arr){

    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        let sum = arr[left] + arr[right];
        // -4 + 10
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--
            //first iteration comes at -4 + 10 = 6 which means right-- 
            //next iteration will be -4 + 3
        }else{
            left++
        }
    }

}

console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]))