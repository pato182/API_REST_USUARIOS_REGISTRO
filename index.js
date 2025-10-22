import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

import userRoutes from "./src/routes/users.routes.js";
app.use("/users", userRoutes);
app.use(express.static('./public'))

// app.get("/", (req, res) => {
//   res.send("API-REST Usuarios, Registro y Login");
// });

app.use((req, res) => {
  res.status(404).send("Esta ruta no existe");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
