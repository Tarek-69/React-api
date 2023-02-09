require("dotenv").config();
require("./db/connexion");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 8080;

const userApi = require("./router/userApi.routes");
app.get("/", (req, res) => {
  res.send("Hello");
});
// http://localhost:8080/api
app.use("/api", userApi);

app.get("/api", (req, res) => {
  res.redirect("/");
});

app.post("/api/users/", (req, res) => {
  res.redirect("http://localhost:3000/");
});

app.use((req, res) => {
  res.status(400).send("ERROR-404 ");
});

app.listen(PORT, () =>
  console.log(`Le serveur à démarrer à cette adresse http://localhost:${PORT}`)
);
