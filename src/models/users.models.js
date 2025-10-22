import pool from "../../config/conexion.js";

export const register = async (values) => {
  const sql = "INSERT INTO users SET ?";
  try {
    const connection = await pool.getConnection();
    const [rows] = await connection.query(sql, [values]);
    connection.release();
    return rows;
  } catch (error) {
    return error;
  }
};
