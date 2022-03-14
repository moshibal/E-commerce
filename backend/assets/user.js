import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "bishal",
    email: "bishal@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "kushal",
    email: "kushal@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
