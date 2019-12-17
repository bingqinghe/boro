function shining(id) {
  var obj = document.getElementById(id);
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  obj.style.borderColor = 'rgb('+r+','+g+','+b+')';
}
setInterval('shining("circle0")', 1500);
setInterval('shining("circle1")', 1500);
setInterval('shining("circle2")', 1500);
setInterval('shining("circle3")', 1500);
setInterval('shining("circle4")', 1500);