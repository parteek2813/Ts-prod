// function detectType(val: number | string) {
//   if (typeof val === "string") {
//     return val.toLowerCase();
//   }
//   return val + 3;
// }

// function provideId(id: string | null) {
//   if (!id) {
//     console.log("Please provide ID");
//     return;
//   }
//   id.toLowerCase();
// }

// // In TypeScript, narrowing refers to the process of refining the type of a variable
// // based on certain conditions or checks. This allows you to work with more specific
// // types, enabling better type safety and more advanced type inference.

// // reference: https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// function printAll(strs: string | string[] | null) {
//   if (strs) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   }
// }

// EXAMPLE

// type Users = {
//   role: "user";
//   username: string;
//   email: string;
// };

// type Admin = {
//   role: "admin";
//   username: string;
//   permissions: string[];
// };

// type UserOrAdmin = Users | Admin;

// function processUserOrAdmin(userOrAdmin: UserOrAdmin): void {
//   // narrowing
//   if (userOrAdmin.role == "user") {
//     // we know it is User type here
//     console.log("Username:", userOrAdmin.username);
//     console.log("Email:", userOrAdmin.email);
//   } else {
//     console.log("Username:", userOrAdmin.username);
//     console.log("Permissions:", userOrAdmin.permissions);
//   }
// }

// // USAGE:

// const user: Users = {
//   role: "user",
//   username: "john_doe",
//   email: "john_doe@gmail.com",
// };

// const admin: Admin = {
//   role: "admin",
//   username: "admin_user",
//   permissions: ["read", "write"],
// };

// processUserOrAdmin(user);
// processUserOrAdmin(admin);

/**
 * In the processUserOrAdmin function, we have narrowed the
 * type of userOrAdmin variable based on the role property.
 * When the role is 'user', we know it's a User type and can
 * access properties specific to User, such as username and
 * email. Similarly, when the role is 'admin', we know it's
 * an Admin type and can access username and permissions.
 */

/** the in operator is used to check if a property exists in an
 * object or if an index exists in an array. It returns a
 * boolean value (true or false) indicating whether the property
 * or index exists. */

// interface User {
//   name: string;
//   email: string;
// }

// interface Admin {
//   name: string;
//   email: string;
//   isAdmin: boolean;
// }

// function isAdminAccount(account: User | Admin) {
//   if ("isAdmin" in account) {
//     return account.isAdmin;
//   }
//   return account.name;
// }

interface Shape {
  type: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function calculateArea(shape: Shape): number {
  if ("radius" in shape && shape.type === "circle") {
    return Math.PI * shape.radius! ** 2;
  } else if ("sideLength" in shape && shape.type === "square") {
    return shape.sideLength! ** 2;
  } else {
    throw new Error("Invalid shape or missing properties");
  }
}

const circle: Shape = { type: "circle", radius: 5 };
console.log(calculateArea(circle));

const square: Shape = { type: "square", sideLength: 2 };
console.log(calculateArea(square));

// const triangle: Shape = { type: "triangle" }; // Missing properties
// console.log(calculateArea(triangle));
