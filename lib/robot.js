class Robot {
	constructor(coordinates = [0,0], bearing = 'north') {
    this.coordinates = coordinates
    this.bearing = bearing
  }

  setCoordinates(co1, co2) {
    this.coordinates = [co1, co2]
  }

  setBearing(direction) {
    const directions = ["north", "south", "east", "west"]
    if (!directions.includes(direction)) {
      throw new Error ("Invalid Robot Bearing")
    }
    else {
      this.bearing = direction
    }
  }

  place(obj) {
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'east'
        break;
      case 'east':
        this.bearing = 'south'
        break;
      case 'south':
        this.bearing = 'west'
        break;
      case 'west':
        this.bearing = 'north'
        break;
    }
  }

  turnLeft() {
    switch(this.bearing) {
      case 'north':
        this.bearing = 'west'
        break;
      case 'east':
        this.bearing = 'north'
        break;
      case 'south':
        this.bearing = 'east'
        break;
      case 'west':
        this.bearing = 'south'
        break;
    }
  }

  advance () {
    switch(this.bearing) {
      case 'north':
        this.coordinates[1] += 1
        break;
      case 'east':
        this.coordinates[0] += 1
        break;
      case 'south':
        this.coordinates[1] -= 1
        break;
      case 'west':
        this.coordinates[0] -= 1
        break;
    }
  }

  translateInstructions (string) {
    let commands = string.split('')
    commands.forEach(command => {
      switch(command) {
        case "R":
          this.turnRight()
          break;
        case "L":
          this.turnLeft()
          break;
        case "A":
          this.advance()
          break;
      }
    })
  }
}
