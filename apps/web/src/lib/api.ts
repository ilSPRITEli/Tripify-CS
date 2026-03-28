import { treaty } from "@elysiajs/eden/treaty2";
import type { App } from "../../../api/src/index";

export const api = treaty<App>("http://localhost:4000");
