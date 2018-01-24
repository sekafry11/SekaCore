function newNode(name, p, o){ // Node Name, parent, atributos
  var a = document.createElement(name), b, c;
  a.setAttr = function(a, b){
    this.setAttribute(a, b);
    return this;
  };
  o = o || {};
  for(b in o){
    a[b] = o[b];
  }
  if(p){p.appendChild(a);}
  return a;
}
function ajax(n, f, c){ // url, function
  f = f || function(){};
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = (c == false)?false:true;
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        f(xhttp.responseText);
      }
  };
  xhttp.open("GET", n, true);
  xhttp.send();
}
function newTable(t, a, b, f, o){ // table, ancho, alto, function, object
  var aa, bb, tr;
  t = t || newNode("table");
  for(aa = 0; aa < a; ++aa){
    tr = newNode("tr", t)
    for(bb = 0; bb < b; ++bb){
      f(tr, aa, bb, o); //tr, x, y, object;
    }
  }
  return t;
}
