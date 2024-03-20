/*
ALGORITMA:
1. buat variable number
2. cek jika number mod 2 = 0, maka genap
3. cek jika number mod 2 = 1, maka ganjil

PSEUDOCODE:
store number with any number

IF number mod 2 = 0 THEN
    print "genap"
ELSE
    print "ganjil"
ENDIF
*/

var angka = 5;

if (angka % 2 === 0) {
  console.log("Angka yang anda masukkan adalah genap");
} else {
  console.log("Anda yang anda masukkan adalah ganjil");
}

/*
GRADE NILAI
ALGORITMA:
 score 100 - 85, grade A
 score 84 - 70, grade B
 score 69 - 50, grade C
 score 49 - 30, grade D
 score 30 - 0, grade E

PSEUDOCODE:
STORE score WITH ANY NUMBER

IF score GREATER THAN EQUAL 85 AND LESS THAN EQUAL 100 THEN
    PRINT "Grade A"
ELSE IF score GREATER THAN EQUAL 70 AND LESS THAN EQUAL 85 THEN
*/


// var angka = 90;

// switch (angka >= 90 || 100) {
//   case A:
//     console.log("A");
//     break;

//   case B:
//     console.log("B");
//     break;
// }
// return angka;