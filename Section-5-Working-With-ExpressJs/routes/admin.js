import { Router } from "express";
import { join } from "path";
import { rootDir } from "../util/contants.js";

const router = Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(join(rootDir, "views", "add-product.html"))
})

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

export default router;