function Platform() {
   
  this.y = 0
  this.xs = [window.innerWidth / 2 - 145, window.innerWidth / 2 - 545, window.innerWidth / 2 + 245]
  this.x = random(this.xs)
  this.width = 300
  this.height = 10
  this.gravity = fallSpeed
  this.xVel = 0

  this.render = function () {
    push()
    noStroke()
    fill("black")
    this.checkCollisions()
    rect(this.x, this.y, this.width, this.height)
    this.y += this.gravity
    pop()
  }

   this.checkCollisions = function () {
    hit = collideRectRect(player.x, player.y, 30, 30, this.x, this.y, this.width, this.height)

    if (hit) {
      player.grounded = true
      //player.y = this.y - 30
      player.gravity -= player.gravity
    } else {
      player.grounded = false
    }
  }
}