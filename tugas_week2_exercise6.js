///Nomer 1
var i = 2;

while (i <= 20){
    console.log(i + ' I love coding')
    i+=2
}

var j = 20; 
while (j > 0){
    console.log(j +' I will become fullstack developer')
    j-=2
}

//Nomer 2
//Looping Pertama
var i = 2;

while (i <= 20){
    console.log(i + ' I love coding')
    i+=2
}

//Looping kedua

for( var i = 1 ; i <= 20 ; i++){
    console.log( i + ' ' + '-' + ' I love coding')
    }

for ( var j = 20 ; j > 0 ; j--){
    console.log (j + ' ' + '-' + ' I will become fullstack developer')
    }

//Nomer 3
//Ganjil dan Genap
for( var angka = 1 ; angka <= 100 ; angka++){
    if ( angka % 2 == 0 )
      console.log( angka + ' Genap')
      else {
          console.log( angka + ' Ganjil')
      }
  }
  
  var lipatTiga = 1;
  var lainnya= '';
  
  for ( ; lipatTiga <= 100; lipatTiga++ ) {
    if ( lipatTiga % 3 == 0 )
      console.log( lipatTiga + ' 3 kelipatan 3')
      else {
        console.log(lainnya)
      }
  }
  
  var angka = 1;
  var lainnya = '';
  
  for ( ; angka <= 100; angka++ ) {
      if ( angka % 6 == 0 )
      console.log( angka + ' 6 kelipatan 6')
  
      if ( angka % 10 == 0 )
      console.log( angka + ' 10 kelipatan 10')
      
        else {
        console.log(lainnya)}
  }
