var murid = [
  [1, "Al Mursalat", 3.8],
  [2, "Udin", 3.0],
  [3, "Mamang", 2.8],
];

for (var i = 0; i < murid.length; i++) {
  if (murid[i][2] >= 3.0) {
    console.log(
      murid[i][0] + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", Lulus"
    );
  } else {
    console.log(
      murid[i][0] + ". " + murid[i][1] + ", IPK = " + murid[i][2] + ", Gagal"
    );
  }
}

console.log("===================================================");

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log("===================================================");

var stats = [10, 2, 3, 7, 1, 8, 5];
var total = 0;
var mean;

for (var i = 0; i < stats.length; i++) {
  total += stats[i];
}
mean = total / stats.length;
console.log("Mean: " + mean.toFixed(2));

console.log("===================================================");

// var str = "buka bersama teman kuliah seru";
// var arr = str.split(" ");

// console.log(arr);

var str2 = "buka bersama teman kuliah seru";
var resultArray = [];
var resultStr = "";

for(i = 0; i < str2.length; i++){
    if(str2[i] != " "){
        resultStr += str2[i]
    }else{
        resultArray.push(resultStr)
        resultStr = ""
    }
    if(i === str2.length - 1){
        resultArray.push(resultStr)
        resultStr = ""
    }
}
console.log(resultArray)

console.log("===================================================");

var countMursalat = 0;
var countAl = 0;
var countSalat = 0;

var votes = ["mursalat", "al", "mursalat", "salat", "mursalat", "al"]

for(var i = 0; i < votes.length; i++){
    if(votes[i] === "mursalat"){
        countMursalat++;
    }else if(votes[i] === "al"){
        countAl++;
    }else if(votes[i] === "salat"){
        countSalat++;
    }
}

console.log([
    ["mursalat", countMursalat],
    ["al", countAl],
    ["salat", countSalat]
])