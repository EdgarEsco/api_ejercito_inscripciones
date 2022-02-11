const { json } = require("express/lib/response");
const res = require("express/lib/response");
const Info = require("../models/info");

exports.getInfo = async (req, res) => {
  try {
    const allInfo = await Info.find();
    res.status(200).json({ allInfo });
  } catch (error) {
    console.log("hubo un error");
  }
};

exports.addInfo = async (req, res) => {
  const { name, grade } = req.body;

  if (!name) {
    res.status(404).json({ message: "Se requiere ingresar un nombre" });
    return;
  }
  if (!grade) {
    res.status(404).json({ message: "Se requiere ingresar el grado" });
    return;
  }
  const newInfo = new Info({ name: name, grade: grade });
  await newInfo
    .save()
    .then(
      res
        .status(201)
        .json({ message: "Se guardo la información correctamente" })
    )
    .catch(
      res.status(400).json({ message: "No se pudo guardar la información" })
    );
};
