$(document).ready(function(){
  canvas = $("#canvas")[0];
  ctx = canvas.getContext('2d');
  CANVAS_WIDTH = canvas.width;
  CANVAS_HEIGHT = canvas.height;
  
  //temporary data to be fetched from models
  earth_size = 200;
  asteroids = [];
  asteroids.push(Asteroid());
  
  initialise();
})

function initialise(){
  //stroke around the whole canvas
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  //draw earth
  ctx.fillStyle = 'navy';
  ctx.fillRect((CANVAS_WIDTH - earth_size)/2, CANVAS_HEIGHT - earth_size, earth_size, earth_size);
  
  //draw temp asteroids
  asteroids.forEach(function(asteroid) {
    asteroid.draw();
  });

}

function Asteroid(){  
  var I = {};
  
  I.color = 'black';
  I.width = 50;
  I.height = 50;
  I.x = 50;
  I.y = 50;
  
  I.draw = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
};

  return I;
}