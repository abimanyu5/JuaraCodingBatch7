var buah = ["mangga", "durian", "apel", "alpukat"];
var sayuran = ["tomat", "kobis", "terong"];

createlistBuah();
createlistSayur();

function createlistBuah() {
  var listBuah = "";
  for (var i = 0; i < buah.length; i++) {
    var listBuah = listBuah + "<li>" + buah[i] + "</li>";
  }
  document.getElementById("buah").innerHTML = listBuah;
}

function createlistSayur() {
  var listSayur = "";
  for (var i = 0; i < sayuran.length; i++) {
    var listSayur = listSayur + "<li>" + sayuran[i] + "</li>";
  }
  document.getElementById("sayuran").innerHTML = listSayur;
}
function tambahBuah(masuk) {
  if (buah.length >= 10) {
    alert("jumlah buah sudah maksimal");
  } else {
    if (cariBuahSama(masuk)) {
      alert("maaf buah sudah diinput");
    } else {
      buah.push(masuk);

      createlistBuah();
    }
  }
}

function cariBuahSama(masuk) {
  for (var i = 0; i < buah.length; i++) {
    if (buah[i].toLowerCase() === masuk.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function tambahSayur(sayurBaru) {
  if (sayuran.length >= 10) {
    alert("jumlah buah sudah maksimal");
  } else {
    if (cariSayurSama(sayurBaru)) {
      alert("maaf buah sudah diinput");
    } else {
      sayuran.push(sayurBaru);

      createlistSayur();
    }
  }
}

function cariSayurSama(sayurBaru) {
  for (var i = 0; i < sayuran.length; i++) {
    if (sayuran[i].toLowerCase() === sayurBaru.toLowerCase()) {
      return true;
    }
  }
  return false;
}

function tambahItem(namaItem,jenisItem){
    switch (jenisItem){

        case"buah":
        tambahBuah(namaItem);
        break;

        case"sayur":
        tambahSayur(namaItem);
        break;
    }
}
//challenge -> buat button add pada tiap item di list, ketika di klik maka akan muncul inputan dan button (sebagai form).
//hasil item tersebut akan di taruh di bawah item yang di klik +.
//div
//splas array