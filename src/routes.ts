import {Router} from "express";
import { SettingsControler } from "./controllers/SettingsControler";

const routes = Router();

const settingsControler = new SettingsControler;

routes.post("/settings", settingsControler.create);

export {routes};