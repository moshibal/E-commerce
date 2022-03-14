import dotenv from "dotenv";
dotenv.config();
import users from "./assets/user.js";
import products from "./assets/products.js";
import userModel from "./models/userModel.js";
import productModel from "./models/productModel.js";
import orderModel from "./models/orderModel.js";
//Import the mongoose module
import mongoose from "mongoose";

//Set up default mongoose connection
mongoose
  .connect(process.env.MONGOCONSTRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log("database connected successfully.");
  });

const insertData = async () => {
  const createdUsers = await userModel.insertMany(users);
  const adminId = createdUsers[0]._id;
  const productwithUser = products.map((product) => {
    return { ...product, user: adminId };
  });
  await productModel.insertMany(productwithUser);

  console.log("successfully added data..");
  process.exit();
};
const deleteAllData = async () => {
  await userModel.deleteMany();
  await productModel.deleteMany();
  await orderModel.deleteMany();
  console.log("successfully deleted data..");
  process.exit();
};
try {
  console.log(process.argv);
  if (process.argv[2] === "insert") {
    insertData();
  } else if (process.argv[2] === "delete") {
    deleteAllData();
  }
} catch (error) {
  console.log(error);
  process.exit(1);
}
