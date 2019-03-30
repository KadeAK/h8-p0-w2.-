//Nomer 1
function shoutOut(){
    var kata = 'Halo Function!';
    return kata
    }
    
    console.log(shoutOut()); 

//Nomer 2
var num1 = 5;
var num2 = 6;

function hasilPerkalian (num1, num2){
return num1 * num2;
}  

console.log(hasilPerkalian(num1, num2));

// cara lain
function calculateMultiply (num1, num2){
    calculateMultiply = num1 * num2;
    return  calculateMultiply;
    }
    
    console.log(calculateMultiply(5, 6));

//Nomer 3
function processSentence (name, age, address, hobby){
    return 'Nama saya '+ name +', umur saya ' + age + ' tahun, alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby +'!'
    }
    
    console.log(processSentence ('Agus', '30', 'Jl. Malioboro, Yogyakarta,', 'gaming'));

//cara lain 
function processSentence (name, age, address, hobby){
    console.log('Nama saya '+ name +', umur saya ' + age + ' tahun, alamat saya di ' + address + ' dan saya punya hobby yaitu ' + hobby +'!')
    }
    
    processSentence ('Agus', '30', 'Jl. Malioboro, Yogyakarta,', 'gaming');