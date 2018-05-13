var can=document.getElementById('sky');
can.width=document.body.clientWidth;
can.height=document.documentElement.clientHeight;
// ctx.beginPath();
var ctx=can.getContext('2d');
ctx.fillStyle='rgba(0,0,0,0)';
// ctx.fillRect(0,0,can.width,can.height);
function clearSky(){
  ctx.clearRect(0,0,can.width,can.height);
  // ctx.fillRect(0,0,can.width,can.height);
}