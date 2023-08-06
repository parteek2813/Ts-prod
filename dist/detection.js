// function detectType(val: number | string) {
//   if (typeof val === "string") {
//     return val.toLowerCase();
//   }
//   return val + 3;
// }
function calculateArea(shape) {
  if ("radius" in shape && shape.type === "circle") {
    return Math.PI * Math.pow(shape.radius, 2);
  } else if ("sideLength" in shape && shape.type === "square") {
    return Math.pow(shape.sideLength, 2);
  } else {
    throw new Error("Invalid shape or missing properties");
  }
}
var circle = { type: "circle", radius: 5 };
console.log(calculateArea(circle));
var square = { type: "square", sideLength: 2 };
console.log(calculateArea(square));
// const triangle: Shape = { type: "triangle" }; // Missing properties
// console.log(calculateArea(triangle));
