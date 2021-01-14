
let nama="abimanyu"
namaku=`aku adalah ${nama}`
console.log(namaku)




let kelas1= ["aqil","kiki","loli"];
let kelas2= ["joko","anto",...kelas1];
let kelas3=["luna","maya"];

kelas3.push(...kelas2);

console.log(kelas2)

let nilaiSiswa=[9,2,6,6];
//console.log(math.max())


function tambah(...nilai){
    let hasil=0;
    for(let i=0;i<nilai.length;i++){
        hasil=hasil + nilai[i];
        //console.log(hasil)
    }
    return hasil;
}

let Manusia ={
    mata : "hitam",
    rambut : "panjang",
    gigi : "putih",
    nama : "hanif",
    keluarga :["adik","ayah"],
    pekerjaan : {jenis:"IT",alamat:"jakarta"}
}
let {mata,gigi,pekerjaan}=Manusia;
console.log()