const mongoose = require("mongoose");

const PSEUDO = process.env.MONGODB_PSEUDO;
const PASSWORD = process.env.MONGODB_PASSWORD;
const CLUSTER_NAME = process.env.MONGODB_CLUSTER_NAME;
const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
mongoose.set("strictQuery", true);
mongoose
  .connect(
    `mongodb+srv://${PSEUDO}:${PASSWORD}@${CLUSTER_NAME}.eameuf5.mongodb.net/${DATABASE_NAME}`
  )
  .then(() => console.log("Connexion à la DB réussie"))
  .catch((error) => console.log(error));

  //{ "name": "Peach", "age": 23, "salary": 99000 }