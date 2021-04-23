import {Router} from "express";
import { MessageController } from "./controllers/MessageController";
import { SettingsControler } from "./controllers/SettingsControler";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsControler = new SettingsControler();
const usersController = new UsersController();
const messageController = new MessageController();

routes.post("/settings", settingsControler.create);
routes.get("/settings/:username", settingsControler.findByUsername);
routes.put("/settings/:username", settingsControler.update);

routes.post("/users", usersController.create);

routes.post("/messages", messageController.create);
routes.get("/messages/:id", messageController.showByUser);

export {routes};