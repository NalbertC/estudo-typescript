import express from "express";
import morgan from "morgan";

const app = express();
// -------------------------
app.use(morgan("dev"));

//--------------------------
app.get("/", (req, res) => {
  return res.send("Hello word!");
});

//--------------------------
app.listen(3333, () => {
  console.log("Servidor iniciado na porta 3333");
});

// Babel, Sucraze
