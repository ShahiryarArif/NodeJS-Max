import { Router } from "express";
import { join } from "path";
import { rootDir } from "../util/contants.js";


const router = Router();

router.get("/",(req, res, next) => {
  res.sendFile(join(rootDir, "views", "shop.html"));
})

export default router;