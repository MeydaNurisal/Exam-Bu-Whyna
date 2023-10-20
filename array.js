//-------------------Array String----------------

let jurusan = ["Rekayasa Perangkat Lunak", "Teknik Komputer Jaringan"]

//Array numeric
let tingkatan_kelas =[10,11,12]

//Array Objek
let siswa = [
//Objek Pertama 
{
    nama: "Bangchan", jurusan: "RPL"
},

//Objek kedua 
{
    nama: "Changbin", jurusan: "TKJ"
},
//Objek ketiga
{
    nama: "Hyunjin", jurusan: "RPL"
}
]

console.log("Jumlah elemen array jurusan = " + jurusan.length);
console.log("Jumlah elemen array tingakatan kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);

//-------menambahkan Array-------

let kota =["Malang","Surabaya","Bandung"]

console.log("isi array kota");
console.log(kota);
console.log("Jumlah data = " + kota.length);

console.log("----------------------------------------");


//tambah data kota baru 

kota.push("Jakarta")

console.log("isi array  kota saat ini");
console.log(kota);
console.log("Jumlah data saaat ini = " + kota.length);

let  barang = [
    { nama: "Coklat", harga: 5000 },
    { nama: "Cream Cheese", harga: 8000}
]

console.log("isi array toko kue");
console.log(barang);
console.log("Jumlah Data = " + barang.length);

console.log("-------------------------------------");

//tambah data barang baru 
barang.push(
    {nama: "Tepung", harga: 5000 }
)

console.log("isi array toko kue");
console.log(barang);
console.log("Jumlah Data = " + barang.length);



