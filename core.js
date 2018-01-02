<<<<<<< HEAD
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
