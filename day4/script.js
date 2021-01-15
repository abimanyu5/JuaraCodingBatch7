
// function biasa
function pangkatDua(a) {
  return a * a;
}
//arrow function dengan 2 parameter
let tambah = (bil1, bil2) => {
  if (bil1 > bil2) {
    console.log(`bilangan pertama ${bil1} lebih besar`);
  } else {
    console.log(`bilangan ${bil2} lebih besar`);
  }
};
//function di dalam function
let nilai = function Hitungkali(a,b){
    return function Test(){
        return "akhirnya saya ketemu"
    }
}
let jalan = nilai(2,3);
console.log(jalan());