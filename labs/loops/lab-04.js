var nums = [1, 6, 42, 3, 9];
var sum = 0;
var i = sum;

//loop goes here

while(i < nums.length){
  var value = nums[i];
  sum = sum + value;

  i++;
}

console.log(sum);

/*
Write a while loop and compute the sum of the values, then console log it.
Expected output:
61
*/



/*
var i = 0;

while(i < cats.length) {
  if(i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}*/
