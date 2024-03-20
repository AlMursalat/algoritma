// STUDY CASE 1

var num = 10;

for(var i = 1; i <= num; i++){
    if(i % 2 === 0){
        console.log(i + ' adalah genap')
    }else{
        console.log(i + ' adalah ganjil')
    }
}

// STUDY CASE 2

var jumFaktor = 0;
var angka = 10;

for (var i = 1; i <= angka; i++){
    if (angka % i === 0){
        jumFaktor++
    }
}

console.log(jumFaktor)

// STUDY CASE 3

if (jumFaktor === 2){
    console.log("Bilangan Prima")
}else{
    console.log("Bukan Bilangan Prima")
}