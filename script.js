const express = require("express"); // require express
const test = require("./models/productsModel.js")

const productsRouter = require("./routes/productsRoutes.js");
const app = express(); // start

// product router kaha pe chale ga
app.use(express.json())
app.use("/api/products", productsRouter);
const mongoose = require("mongoose");

const url =
  "mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.57iow7s.mongodb.net/$_DB_NAME_$?retryWrites=true&w=majority&appName=Cluster0";

//USER: INFO
const databaseUser = "Shaddy";
const databasePassword = "Shadman123";
const databaseName = "amazon-backend";


//DB : CONNECTION
let dbLink = url.replace("$_USERNAME_$", databaseUser);
dbLink = dbLink.replace("$_DB_NAME_$", databaseName);
dbLink = dbLink.replace("$_PASSWORD_$", databasePassword);


//MONGOOSE : CONNECTION
mongoose.connect(dbLink).then(() => console.log("DATABASE Connected!"));

app.listen(5000, () => console.log("APP STARTED"));
