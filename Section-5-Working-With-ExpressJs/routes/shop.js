import { Router } from "express";
import { join } from "path";
import { __dirname } from "../util/contants.js";


const router = Router();

router.get("/",(req, res, next) => {
  res.sendFile(join(__dirname, "../", "views", "shop.html"));
})

export default router;