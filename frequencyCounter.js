function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    //{3:1}
  }
  for (let value of arr2) {
    frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    //{9:1}
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
        //checks if first key which is 3 ** 2 = 9 exists in frequencyCounter2 which has {9:1}
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        //it now checks value to see how many times it exists
      return false;
    }
  }

  return true;
}

console.log(same([3, 4], [9, 16]));
