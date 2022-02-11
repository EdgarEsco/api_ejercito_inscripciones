const { json } = require("express/lib/response");
const res = require("express/lib/response");
const Info = require("../models/info");

exports.getInfo = async (req, res) => {
  try {
    const allInfo = await Info.find();
    res.status(200).json({ allInfo });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Ocurrió un error al consultar ls información" });
  }
};

exports.getInfoByName = async (req, res) => {
  const userMatricula = req.params.matricula;
  try {
    const user = await Info.find({ enrollment: userMatricula });
    if (user.length == 0) {
      res
        .status(404)
        .json({
          message: "No se encontró infomación con ese número de matrícula",
        });
      return;
    } else {
      res.status(200).json(user);
      return;
    }
  } catch (error) {
    res.status(400).json({ message: "Ocurrió un error al consultar usuario" });
  }
};

exports.addInfo = async (req, res) => {
  const {
    name,
    grade,
    address,
    phone,
    cellphone,
    email,
    place_born,
    date_born,
    date_school,
    date_army,
    enrollment,
    prof_license,
    curp,
    civil_status,
    rfc,
    cta_bajio,
    shoe_size,
    size,
    name_primary,
    date_start_primary,
    date_end_primary,
    name_high_school,
    date_start_high_school,
    date_end_high_school,
    name_preparatory,
    date_start_preparatory,
    date_end_preparatory,
    name_professional,
    date_start_professional,
    date_end_professional,
    training_campus,
    promotions,
    dates_promotions,
    laguanges,
    name_dad,
    age_dad,
    afiliate_dad,
    name_mom,
    age_mom,
    afiliate_mom,
    name_wife,
    age_wife,
    afiliate_wife,
    son_1_name,
    age_1_son,
    afiliate_1_son,
    son_2_name,
    age_2_son,
    afiliate_2_son,
    son_3_name,
    age_3_son,
    afiliate_3_son,
    emergency_name,
    emergency_phone,
    weight,
    height,
    complexion,
    blood_type,
    vaccines,
    brand_car,
    tipe_car,
    plates,
    decal_folio,
    model,
  } = req.body;

  if (!name) {
    res.status(404).json({ message: "Se requiere ingresar un nombre" });
    return;
  }
  if (!grade) {
    res.status(404).json({ message: "Se requiere ingresar el grado" });
    return;
  }
  const newInfo = new Info({
    name: name,
    grade: grade,
    address: address,
    phone: phone,
    cellphone: cellphone,
    email: email,
    place_born: place_born,
    date_born: date_born,
    date_school: date_school,
    date_army: date_army,
    enrollment: enrollment,
    prof_license: prof_license,
    curp: curp,
    civil_status: civil_status,
    rfc: rfc,
    cta_bajio: cta_bajio,
    shoe_size: shoe_size,
    size: size,
    name_primary: name_primary,
    date_start_primary: date_start_primary,
    date_end_primary: date_end_primary,
    name_high_school: name_high_school,
    date_start_high_school: date_start_high_school,
    date_end_high_school: date_end_high_school,
    name_preparatory: name_preparatory,
    date_start_preparatory: date_start_preparatory,
    date_end_preparatory: date_end_preparatory,
    name_professional: name_professional,
    date_start_professional: date_start_professional,
    date_end_professional: date_end_professional,
    training_campus: training_campus,
    promotions: promotions,
    dates_promotions: dates_promotions,
    laguanges: laguanges,
    name_dad: name_dad,
    age_dad: age_dad,
    afiliate_dad: afiliate_dad,
    name_mom: name_mom,
    age_mom: age_mom,
    afiliate_mom: afiliate_mom,
    name_wife: name_wife,
    age_wife: age_wife,
    afiliate_wife: afiliate_wife,
    son_1_name: son_1_name,
    age_1_son: age_1_son,
    afiliate_1_son: afiliate_1_son,
    son_2_name: son_2_name,
    age_2_son: age_2_son,
    afiliate_2_son: afiliate_2_son,
    son_3_name: son_3_name,
    age_3_son: age_3_son,
    afiliate_3_son: afiliate_3_son,
    emergency_name: emergency_name,
    emergency_phone: emergency_phone,
    weight: weight,
    height: height,
    complexion: complexion,
    blood_type: blood_type,
    vaccines: vaccines,
    brand_car: brand_car,
    tipe_car: tipe_car,
    plates: plates,
    decal_folio: decal_folio,
    model: model,
  });

  const userExist = await Info.findOne({ enrollment: enrollment });
  if (userExist) {
    res.status(200).json({ message: "Ya existe información de ese usuario" });
    return;
  } else {
    try {
      const userAdd = await newInfo.save();
      res.status(201).json({ message: "Información agregada correctamente" });
      return;
    } catch (error) {
      res
        .status(400)
        .json({ message: "Ocurrió un error al guardar la información" });
      return;
    }
  }
};
