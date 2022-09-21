"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const PORT = 3000;
const app = (0, express_1.default)();
// -------------------------
app.use((0, morgan_1.default)("dev"));
// -------------------------
app.use((0, cors_1.default)());
//--------------------------
app.use(routes_1.default);
//--------------------------
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
// Babel, Sucraze
