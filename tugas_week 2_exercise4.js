var tanggal= Math.floor(Math.random ()*31);
var bulan = Math.floor(Math.random ()*12);

function getRandomIntInclusive(min, max) {
    min = Math.ceil(1900);
    max = Math.floor(2200);}
    var tahun = Math.floor(Math.random() * (1900 - 2200 + 1)) + 2200; 
    //The maximum is inclusive and the minimum is inclusive 

    console.log(tanggal, bulan, tahun);
