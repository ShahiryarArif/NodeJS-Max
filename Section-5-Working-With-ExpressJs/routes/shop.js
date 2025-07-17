import { Router } from "express";

const router = Router();

router.get("/",(req, res, next) => {
  console.log("In another middleware");
  res.send("<h1>hello from the other side</h1>");
})

export default router;