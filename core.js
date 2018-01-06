function newNode(name, p, o){
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
function ajax(n, f){
  var xhttp = new XMLHttpRequest();
  xhttp.withCredentials = true;
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        f(xhttp.responseText);
      }
  };
  xhttp.open("GET", n, true);
  xhttp.send();
}
