function Bullet() {
  this.w = [0, window.innerWidth]
  this.x = 0
  this.y = random(window.innerHeight)
  this.g = ((player.y - 15) - this.y) / ((player.x + 15) - this.x)
  this.c = ((player.y - 15) - (this.g * player.x))
  this.render = function() {
    fill("black")
    strokeWeight(12)
    point(this.x, this.y)   
    this.x += 12
    this.y = ((this.g * this.x) + this.c)
    this.y += 60
    let hit = collidePointRect(this.x,this.y,player.x,player.y,30, 30);
    if (hit) {
      end()
      noLoop()
    }
    //y = mx + c
    //c = y - mx
    
  }
}