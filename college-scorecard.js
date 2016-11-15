var fs = require('fs');
var contentsOfFile = fs.readFileSync("Most+Recent+Cohorts+(Scorecard+Elements).csv", "utf-8");

//console.log(contentsOfFile);
//console.log(cumulativeScore);

var lines = contentsOfFile.split("\n");

var i = 1;

while (i < lines.length - 1)  {
  var indivArray = lines [i].split(",");
  var thing = indivArray[3] + " " + indivArray[32];
  console.log(thing);
  i++;
}



/*Based on the documentation given on the website, we want the cumulativeScore for
each school*/
