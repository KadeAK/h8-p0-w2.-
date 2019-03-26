var tanggal= Math.floor(Math.random ()*31)+1;
var bulan = Math.floor(Math.random ()*12)+1;
var namaBulan = '';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(1900);
    max = Math.floor(2200);}
    var tahun = Math.floor(Math.random() * (1900 - 2200 + 1)) + 2200; 
    //The maximum is inclusive and the minimum is inclusive 

switch (bulan){
    case 1 :
        namaBulan = 'Januari';
        break;
    case 2 :
        namaBulan = 'Februari';
        break;
    case 3 :
        namaBulan = 'Maret';
        break;
    case 4 :
        namaBulan = 'April' ;
        break;
    case 5 :
        namaBulan = 'Mei' ;
        break;
    case 6 :
        namaBulan = 'Juni' ;
        break;
    case 7 :
        namaBulan = 'Juli' ;
        break;
    case 8 :
        namaBulan = 'Agustus' ;
        break;
    case 9 :
        namaBulan = 'September' ;
        break;
    case 10 :
        namaBulan = 'Oktober' ;
        break;
    case 11 :
        namaBulan = 'November' ;
        break;
    case 12 :
        namaBulan = 'Desember';
    break;
}

    console.log(tanggal, namaBulan, tahun);
