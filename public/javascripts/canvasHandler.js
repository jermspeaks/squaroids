$(document).ready(function(){
  canvas = $("#canvas")[0];
  ctx = canvas.getContext('2d');
  init();
})

function init(){
  ctx.fillStyle = #0101DF;
  ctx.fillRect(0, 0, 50, 50);
}