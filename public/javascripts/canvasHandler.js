$(document).ready(function(){
  canvas = $("#canvas")[0];
  ctx = canvas.getContext('2d');
  CANVAS_WIDTH = canvas.width;
  CANVAS_HEIGHT = canvas.height;
  initialise();
  
  //temporary data to be fetched from models
  earth_size = 200;
  ast_size = 50;
})

initialise(){
  //stroke around the whole canvas
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  //draw earth
  ctx.fillStyle = 'navy';
  ctx.fillRect((CANVAS_WIDTH - earth_size)/2, CANVAS_HEIGHT* 3/4, earth_size, earth_size);
  
  //draw temp asteroid
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, ast_size, ast_size);
}