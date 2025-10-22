import * as models from "../models/users.models.js";

export const registerUser = async (req, res) => {
  const values = req.body;
  console.log(req.body);
  const rows = await models.register(values);
  res.send("Usuario registrado");
};
