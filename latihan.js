var n = 5;
var result = ""

for(var i = 0; i < n; i++){
    for(var j = 0; j <= i; j++){
        result += "#"
    }
    console.log(result)
    result = ""
}


for (var i = 1; i <= 5; i++){
    var temp = '';
    for (var j = 1; j <= i; j++){
        temp = temp + j;
    }
    console.log(temp);
}