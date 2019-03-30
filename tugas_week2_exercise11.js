function balikKata(kata) {
  // you can only write your code here!
  var kata1 = kata.split('');
  var membalikkanKata = kata1.reverse();
  var katadibalikkan = membalikkanKata.join('');
  
  return katadibalikkan;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
