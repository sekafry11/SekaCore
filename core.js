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
<<<<<<< HEAD
=======
=======
º
>>>>>>> ecb0087c5097ca4c0e683d48d2fe0f4d4f21e692
>>>>>>> d04603f71e385eb368f697ef6db7d78e8dcb8dfb
