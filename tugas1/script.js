function calculate() {
  var a = parseInt(document.getElementById("angka1").value);
  var div = document.getElementById("tampil");
  //var x = document.createElement("table");
  //var y = document.createElement("tr");
  //var z = document.createElement("td");
  
  for (i=0;i<a;i++){
    var input = document.createElement("INPUT");
    input.setAttribute("type", "number");
    div.appendChild(input);
  }

  //x.appendChild(input);
  //y.appendChild(z);
  //x.appendChild(y);
  //div.appendChild(input);

  

  
    var s = '';
    for (var i =0; i < a; i++ ){
        for (var j =0; j<a; j++){
            s+="k";
        }
        s += "<br/>";
    }
    document.getElementById("tampil").innerHTML = s;
  }

function tambahMatrix(a) {
  return a;
}

//document.getElementById("hasil").value = tambahMatrix(a);

/*function int() {
  
  var a = parseInt(document.getElementById("angka1").value);
  var div = parseInt(document.getElementById("tampil");
  var bill = a.value;

  for (n = 0; n < bill; n++) {
    for (m = 0; m < bill; m++) {
      if (n == m) {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "number");
      
        div.appendChild(x);
      } else {
        var x = document.createElement("INPUT");
        x.setAttribute("type", "number");
      
        div.appendChild(x);
      }
    }
    document.write("<br />");
  }
}*/


 