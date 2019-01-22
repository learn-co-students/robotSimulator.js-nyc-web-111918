class Robot {
	//your solution here
  constructor() {
    this.coordinates = [0,0];
    this.bearing = 'north';
    this.turnRight = this.turnRight.bind(this);
    this.turnLeft = this.turnLeft.bind(this);
    this.advance = this.advance.bind(this);
  }

  setCoordinates(c1, c2){
    this.coordinates = [c1, c2];
  }

  setBearing(direction){
    const directions = ["north", "south", "east", "west"];
    if (directions.includes(direction)){
      this.bearing = direction;
    }else{
      throw("Invalid Robot Bearing")
    }
  }

  place(obj){
    this.coordinates = [obj.x, obj.y];
    this.bearing = obj.direction;
  }

  turnRight(){
    let obj = {
      north: "east",
      east: "south",
      south: "west",
      west: "north",
    }
    this.bearing = obj[this.bearing];
  }

  turnLeft(){
    let obj = {
      north: "west",
      west: "south",
      south: "east",
      east: "north",
    }
    this.bearing = obj[this.bearing];
  }

  advance(){
    let obj = {
      north: [this.coordinates[0], this.coordinates[1] + 1],
      east: [this.coordinates[0] + 1, this.coordinates[1]],
      south: [this.coordinates[0], this.coordinates[1] - 1],
      west: [this.coordinates[0] - 1, this.coordinates[1]],
    }
    this.coordinates = obj[this.bearing];
  }

  translateInstructions(args){
    let arg_array = args.split('');
    let obj = {
      r: this.turnRight,
      a: this.advance,
      l: this.turnLeft
    }
    arg_array.forEach(function(ele){
      (obj[ele.toLowerCase()])();
    })
  }
}
