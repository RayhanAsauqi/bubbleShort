let data = [15, 9, 18, 7];
console.log(`data = ${data.join(" - ")}`);

let bs = function () {
  //melakukan looping index nya
  for (let i = 0; i < data.length; i++) {
    //melakukan looping perbandingan data
    for (let j = 0; j < data.length - 1; j++) {
      //melakukan algoritma bubble short
      //jika nilai satu elemen lebih besar dari elemen berikutnya. jika iya, maka siapkan satu temporary untuk menyimpan data yang akan di swap
      if (data[j] > data[j + 1]) {
        let temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
    console.log(`Proses ke - ${i + 1} = ${data.join(" - ")}`);
  }
};
