function Player() {
  this.x = window.innerWidth / 2
  this.y = 0
  this.gravity = 0.2
  this.grounded = false
  this.xVel = 0
  this.fuel = 15

  this.render = function() {
    push()
    noStroke()
    fill("red")
    this.y -= this.gravity
    this.x += this.xVel
    this.xVel *= 0.85
    rect(this.x, this.y, 30, 30)
    rect(this.x - this.xVel, this.y + this.gravity, 30, 30)
    rect(this.x - (this.xVel * 2), this.y + (this.gravity * 2), 30, 30)
    
    this.monitorGravity()
    pop()
  }


  this.monitorGravity = function () {
    if (this.grounded) {
      //this.gravity = fallSpeed
      //console.log(this.fuel)
    } else {
      if (this.gravity < 8.1) this.gravity -= 0.4
    }
  }

 
  this.jump = function () {
    console.log("jump")
    if (Math.floor(this.fuel) > 0) {
      this.grounded = false
      this.gravity = 8
      this.y -= 5
      this.fuel -= 1
    }
    console.log(this.fuel)
  }


  

  

}