// function detectType(val: number | string) {
//   if (typeof val === "string") {
//     return val.toLowerCase();
//   }
//   return val + 3;
// }
function processUserOrAdmin(userOrAdmin) {
  // narrowing
  if (userOrAdmin.role == "user") {
    // we know it is User type here
    console.log("Username:", userOrAdmin.username);
    console.log("Email:", userOrAdmin.email);
  } else {
    console.log("Username:", userOrAdmin.username);
    console.log("Permissions:", userOrAdmin.permissions);
  }
}
// USAGE:
var user = {
  role: "user",
  username: "john_doe",
  email: "john_doe@gmail.com",
};
var admin = {
  role: "admin",
  username: "admin_user",
  permissions: ["read", "write"],
};
processUserOrAdmin(user);
processUserOrAdmin(admin);

/**
 * In the processUserOrAdmin function, we have narrowed the
 * type of userOrAdmin variable based on the role property.
 * When the role is 'user', we know it's a User type and can
 * access properties specific to User, such as username and
 * email. Similarly, when the role is 'admin', we know it's
 * an Admin type and can access username and permissions.
 */
