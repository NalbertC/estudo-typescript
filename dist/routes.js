"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const ConsumeController_1 = __importDefault(require("./controllers/ConsumeController"));
const ReposController_1 = __importDefault(require("./controllers/ReposController"));
const routes = (0, express_1.Router)();
//--------------------------
routes.get("/api", ConsumeController_1.default.index);
//--------------------------
routes.get("/users/:user", UserController_1.default.index);
//--------------------------
routes.get("/users/:user/repos", ReposController_1.default.index);
exports.default = routes;
