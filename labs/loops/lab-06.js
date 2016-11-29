var listOfNumbers = [1, 6, 42, 3, 17];
var listOfBigNumbers = [];

//loop goes here

for (var index in listOfNumbers) {
    var value = listOfNumbers[index];
    if (value > 10) {
        listOfBigNumbers.push(value);
    }
    //do something here
}


console.log(listOfBigNumbers);

/*
Write a for loop to loop over the array of numbers and collect all the numbers over 10 into another array.
Expected output:
[ 42, 17 ]
*/
