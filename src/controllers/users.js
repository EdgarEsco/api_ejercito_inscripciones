const User = require("../models/users");
const bcryptjs = require("bcryptjs");

exports.addUser = async (req, res) => {
  try {
    const { email, user, password } = req.body;

    const email_checked = await User.find({ email: email });

    if (email_checked.length > 0) {
      return res.status(200).json({
        message: "Email ya existe",
      });
    }

    const newUser = new User({ email, user, password });

    //encriptar la contraseña
    newUser.password = await bcryptjs.hash(password, 10);

    await newUser.save();
    res.status(201).json({
      message: "Usuario guardado exitosamente",
    });
  } catch (error) {
    res.status(400).json({
      message: "Hubo un error al guardar el usuario",
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const email_checked = await User.find({ email: email });

  if (email_checked.length == 0) {
    return res.status(404).json({
      message: "Email no existe",
    });
  }

  const password_bd = email_checked[0].password;
  //compara si la contraseña de la bd y la ingresada son iguales
  const validation_password = await bcryptjs.compare(password, password_bd);

  if (validation_password == true) {
    res.status(200).json({
      message: "Acceso",
    });
  } else {
    res.status(401).json({
      message: "Contraseña incorrecta",
    });
  }
};
