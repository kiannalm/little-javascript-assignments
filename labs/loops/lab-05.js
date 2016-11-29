var nums = [1, 6, 42, 3, 17];
var bigNums = [];

var n = 0;
//loop goes here
while (n < nums.length) {
    var thisNumber = nums[n];
    if (thisNumber > 10) {
      console.log(thisNumber);
      bigNums.push(thisNumber);
    }
  n++;
}

console.log(bigNums);




/*
Write a while loop to loop over the array of numbers and collect all the numbers over 10 into another array.
Don't remember how to add something to a JS array? Google it!
Expected output:
[ 42, 17 ]
*/
