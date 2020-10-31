var player;
var platforms = [];
var hit = false;
var fallSpeed = 2
var score = 0
var newPlatform;
var shoot;
var fall;
var font;
var bullets = [];
var pt = 2000;
var changed = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  font = loadFont("ZCOOLKuaiLe-Regular.ttf")
  document.getElementById("gameOver").style.display = "none"
  score = 0
  pt = 2000
  changed = false
  platforms = []
  bullets = []
  fallSpeed = 0.5
  player = new Player()
  loop()
  platforms.push(new Platform())
  platforms[0].x = window.innerWidth / 2 - 145
  clearInterval(newPlatform)
  clearInterval(fall)
  clearInterval(shoot)
  
  newPlatform = setInterval(function() {
    platforms.push(new Platform())
  }, 2000)

  fall = setInterval(function(){
    fallSpeed += 0.6
    if (player.fuel < 15) {
      player.fuel = 15
    }else {
      player.fuel += 5
    }
  }, 10000)

  shoot = setInterval(function() {
    for (var i = 0; i <= 6; i++){
      setTimeout(function() {
        bullets.push(new Bullet())
      }, 200 * i)
    }
  }, 7000)
  
  
}

function draw() {
  background("white")
  textSize(20);
  textFont(font)
  text('Jump Fuel : ' + String(player.fuel), 10, 30);
  text('Score : ' + String(score), 10, 55);
  if (fallSpeed > 6) { 
    if (!changed) {
    pt = 1000
    changed = true
      newPlatform = setInterval(function() {
      platforms.push(new Platform())
      }, pt)
    }
  }
  player.render()
  for (i of platforms) i.render()
  if (bullets != null){
    for (i of bullets) i.render()
  }
  if (player.y >= window.innerHeight) {
    end()
    noLoop()
  }
  score += 1
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    player.jump()
  }

  if (keyCode == LEFT_ARROW) {
    player.xVel = -12
  }

  if (keyCode == RIGHT_ARROW) {
    player.xVel = 12
  }
}

function end() {
  document.getElementById("gameOver").style.display = "block"
  let highscore = localStorage.getItem("hs")
  if (highscore) {
    if (score > highscore) {
      localStorage.setItem("hs",score)
      highscore = localStorage.getItem("hs")
    }
    
  }else {
    localStorage.setItem("hs",score)
    highscore = localStorage.getItem("hs")
  }
  bullets = []
  var color;
  if (score < 2500) {
    color = "red"
  }else if (score < 4500) {
    color = "orange"
  }else if (score > 4500 && score < 6000) {
    color = "lightgreen"
  }else if (score >= 6000) {
    color = "darkgreen"
  }
  document.getElementById("score").innerHTML = "<p>Score <b style = 'color: "+color+"'>" + score + "</b></p>"
  document.getElementById("highscore").innerHTML = "<p>Highscore <b>"+highscore+"</b></p>"
  clearInterval(newPlatform)
  fallSpeed = 0.5
}

function reset() {
  score = 0
}