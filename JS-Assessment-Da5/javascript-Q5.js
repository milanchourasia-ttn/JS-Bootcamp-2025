//Q5. Import a module containing the constants and method for calculating area of circle, rectangle, cylinder.
//Area of circle
export function areaOfCircle(radius) {
  // if(!isNaN(radius) && radius > 0) {
    return Math.PI * radius ** 2
  //   } else {
  //     console.log("Please pass numeric values.");
  // }
}
//area of Rectangle
export function areaOfRectangle(length, width) {
  return length * width;
}
//area of Cylinder
export function surfaceAreaOfCylinder(radius, height) {
  let lateralSurfaceArea = 2 * Math.PI * radius * height;
  let totalSurfaceArea = 2 * Math.PI * radius * (radius + height);
  return { lateralSurfaceArea, totalSurfaceArea };
}
