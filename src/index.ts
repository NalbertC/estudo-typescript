import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes";

const PORT = 3000;

const app = express();
// -------------------------
app.use(morgan("dev"));
// -------------------------
app.use(cors());
//--------------------------
app.use(routes);

//--------------------------
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});

// Babel, Sucraze
