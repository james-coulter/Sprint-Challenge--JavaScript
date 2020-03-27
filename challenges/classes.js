
class CuboidMaker2 {
    constructor (attr) {
      this.length = attr.length;
      this.width = attr.width;
      this.height = attr.height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

class CubeMaker extends CuboidMaker2 {
    constructor (attr) {
        super(attr);
    }
    cubeVolume(){
        return Math.pow(this.length, 3);
    }
    cubeSurfaceArea(){
        return Math.pow(this.length, 2) * 6;
    }
}

 const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});

const cuboid3 = new CubeMaker({
    length: 4,
    width: 5,
    height: 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130
console.log(cuboid3.cubeVolume()); // 4^3 = 64
console.log(cuboid3.cubeSurfaceArea()); // (4^2) * 6 = 96

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.