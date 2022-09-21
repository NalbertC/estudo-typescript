import { Router } from "express";
import UserController from "./controllers/UserController";
import ConsumeController from "./controllers/ConsumeController";
import ReposController from "./controllers/ReposController";

const routes = Router();

//--------------------------
routes.get("/api", ConsumeController.index);

//--------------------------
routes.get("/users/:user", UserController.index);

//--------------------------
routes.get("/users/:user/repos", ReposController.index);

export default routes;
