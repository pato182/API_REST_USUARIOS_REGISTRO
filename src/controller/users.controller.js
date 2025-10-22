import bcrypt from'dbcrypt'
import * as models from "../models/users.models.js";

export const registerUser = async (req, res) => {
  const {email, pass} = req.body

if(exist.errno){
  return res.status(500).json({message: 'el usuario no existe'})
}

  console.log(exist);


  const passwordHash = await bcrypt.hash(pass, 10)
  req.body.pass = passwordHash

  const values = req.body;
  const rows = await models.createUser(values);
  if(rows.errno){
    return res.status(500).json({message: 'ERROR en consulta cod:' + rows.errno})
  }
};

export const getUserByEmail = async 