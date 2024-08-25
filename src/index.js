import express from "express";
import { PORT } from "./config.js";
import { conexion } from "./db.js";
import { unicornioRoute } from "./routes/unicornio.route.js";

const app = express();
app.use(express.json());
app.use(unicornioRoute);

app.listen(PORT, () => {
  console.log("server on port " + PORT);
});
