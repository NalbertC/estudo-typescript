import express from "express";
import morgan from "morgan";
import cors from "cors";

import routes from "./routes";

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "http://localhost";

const app = express();
// -------------------------
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(routes);

//--------------------------
app.listen(PORT, () => {
  console.log(`Server run in ${HOSTNAME}:${PORT}`);
});

// Babel, Sucraze
