$(document).ready(function(){
  canvas = $("#canvas")[0];
  ctx = canvas.getContext('2d');
  CANVAS_WIDTH = canvas.width;
  CANVAS_HEIGHT = canvas.height;
  
  initialise();
  
  var FPS = 60;
  setInterval(function() {
    update();
    draw();
  }, 1000/FPS);
})

function update(){
  //move asteroids
  asteroids.forEach(function(asteroid) {
    asteroid.update();
  });
}

function draw(){
  //redraw and stroke around the whole canvas
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
  //draw earth
  ctx.fillStyle = 'navy';
  ctx.fillRect((CANVAS_WIDTH - earth_size)/2, CANVAS_HEIGHT - earth_size, earth_size, earth_size);
  
  //draw asteroids
  asteroids.forEach(function(asteroid) {
    asteroid.draw();
  });
}

function initialise(){
  //asteroid location temp variables
  ast_x = 50;
  ast_y = 50;
  
  //temporary data to be fetched from models
  earth_size = 200;
  asteroids = [];
  
  //use this to add a new asteroid
  addAsteroid(350, 20);
}

function addAsteroid(x, y){
  ast_x = x;
  ast_y = y;
  asteroids.push(Asteroid());
}

function Asteroid(){  
  var I = {};
  
  I.color = 'black';
  I.width = 50;
  I.height = 50;
  I.x = ast_x;
  I.y = ast_y;
  I.alive = true;
  
  I.draw = function() {
    if(this.alive){
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

  I.update = function() {
    if(this.alive){
      if((this.x > ((CANVAS_WIDTH-earth_size)/2)) && (this.x < ((CANVAS_WIDTH+earth_size)/2)) && (this.y > (CANVAS_HEIGHT - earth_size))){
        alert("asteroid hit earth");
        this.alive = false;
      }
      else{
        this.y++;
      }
    }
};

  return I;
}