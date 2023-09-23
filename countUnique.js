function countUnique(arr){

    let index = 0;

    for(let i = 1; i < arr.length ; i++){


        if(arr[index] !== arr[i]){

            index++

            arr[index] = arr[i];

        }
    }

    return index + 1

    

}


console.log(countUnique([1,1,1,3,4,5,5,5,6]))