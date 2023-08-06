interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  breadth: number;
}

type ShapeNew = Circle | Square | Rectangle;

function getTrueShape(shape: ShapeNew) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.side * shape.side;
  }
  return shape.length * shape.breadth;
}

// OR

function getArea(shape: ShapeNew) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.length * shape.breadth;

    default:
      const _defaultForShape: never = shape;
      return _defaultForShape;
  }
}
