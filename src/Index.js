
/* Configuracion de servidor  node js*/ 

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoutes = require ("./routes/user");

const app = express();
const port = process.env.PORT || 5173;

//midelware

app.use("/api",userRoutes);

//routes

app.get("/",(req, res) => {
    res.send("Welcome to my API");
});

//Mongo Conection abrir

mongoose.connect(process.env.MONGODB_URl)

.then(() => console.log("Conectado a MongoDB Atlas"))
.catch((error) =>console.error(error));

//Mongo Conection cerrar


app.listen(port,() => console.log('El servidor esta escuchado por',port ));

