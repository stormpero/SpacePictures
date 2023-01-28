import { setStorage } from "./storage";
import * as settings from "./adapters/settings";

setStorage(localStorage);

export { settings };
