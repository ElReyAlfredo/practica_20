const express = require("express"); //Inyectamos la dependencia de express
const router = express.Router(); //Generamos la instancia del router
const mongoose = require("mongoose"); //Inyectamos la dependencia de mongoose
let Person = require("../models/persons"); //Y inyectamos la dependencia de Persons del modelo

//Agregamos la ruta /gente por el metodo get, esto debe ser asincrona por lo cual deberia retornar una promesa que se debe de cumplir, le ponemos al persons await para que cargen los datos en segundo plano
/*
router.get("/gente", async (req, res) => {
  const Persons = await Person.find({});
  res.json(Persons);
});
*/

router.get("/gente", async (req, res) => {
  const Persons = await Person.find({});
  res.render("index", { Persons });
});
//Exportamos el ruteador
module.exports = router;
