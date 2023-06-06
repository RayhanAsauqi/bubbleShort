//analoginya: misalnya saya memiliki sebuah keramik dan sayang ingin menumpuknya apa yang harus saya lakukan?

//1.variabel keramik untuk menumpuk keramik / data 
let keramik = []
//2.variabel tambah membuat function untuk menampung data yang akan di tumpuk dan melakukan penambahan tumpukan keramiknya
let tambah = function(warna, keramik){
    keramik.push(warna);
    return keramik
}

console.log(tambah('merah', keramik))
console.log(tambah('kuning', keramik))
console.log(tambah('hijau', keramik))
console.log(tambah('biru', keramik))
console.log(tambah('ungu', keramik))

//function di bawah ini bertujuan untuk mengambil/menghapus warna pada array keramik
let ambil = function(keramik){
    keramik.length == 0? console.log('tidak ada tumpukan') : keramik.pop(keramik)
    return keramik
}

console.log(ambil(keramik))
console.log(ambil(keramik))
console.log(ambil(keramik))
console.log(ambil(keramik))
console.log(ambil(keramik))

