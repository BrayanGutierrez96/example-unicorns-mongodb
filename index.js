import express from "express";
import { PORT } from "./src/config.js";
import { conexion } from "./src/db.js";
import { unicornioRoute } from "./src/routes/unicornio.route.js";
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
app.use(unicornioRoute);

app.listen(PORT, () => {
  console.log("server on port " + PORT);
});
