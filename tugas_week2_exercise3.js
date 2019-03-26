var Nama = 'Mikael';
var Peran = 'lainnya';

if (Peran === 'ksatria') {
  console.log('Selamat datang di Dunia Proxytia,' + Nama);
  console.log('Halo', Peran, Nama,'kamu dapat menyerang dengan senjatamu!' );
}
else if (Peran === 'tabib') {
  console.log('Selamat datang di Dunia Proxytia,' + Nama);
  console.log ('Halo', Peran, Nama, 'kamu akan membantu temanmu yang terluka.');
}
else if (Peran === 'penyihir'){
  console.log('Selamat datang di Dunia Proxytia,' + Nama);
  console.log('Halo', Peran, Nama, 'ciptakan keajaiban yang membantu kemenanganmu!')
}

else {
  console.log('Halo', Nama, ', pilih peranmu untuk memulai game!');
}