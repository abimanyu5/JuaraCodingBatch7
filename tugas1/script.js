function calculate() {
  var a = parseInt(document.getElementById("angka1").value);
  var div = document.getElementById("tampil");
  createm1();
  createm2();

  function createm1() {
    var p = "";
    for (var i = 0; i < a; i++) {
      for (var j = 0; j < a; j++) {
        p += ` <input type="text" value="">`;
      }
      p += "<br/>";
    }
    document.getElementById("tampil").innerHTML = p;
  }
  function createm2() {
    var p = "";
    for (var i = 0; i < a; i++) {
      for (var j = 0; j < a; j++) {
        p += ` <input type="text" value="">`;
      }
      p += "<br/>";
    }
    document.getElementById("tampil2").innerHTML = p;
  }
}

function tambahMatrix(a) {
  return a;
}

