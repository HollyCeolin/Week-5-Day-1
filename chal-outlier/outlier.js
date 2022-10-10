// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a function that takes the array as an argument and returns this “outlier” N.

// Examples:

// [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)

function findOutlier(nums){
    const oddArray = [];
    const evenArray = [];
    for (let num of nums) {
      if (num % 2 === 0) {
        evenArray.push(num);
      } else {
        oddArray.push(num);
      }
    }
    return oddArray.length === 1 ? oddArray[0] : evenArray[0];
  }
  console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
  console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))