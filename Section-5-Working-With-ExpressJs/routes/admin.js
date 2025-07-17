import { Router } from "express";

const router = Router();

router.get("/add-product", (req, res, next) => {
  res.send("<form action='/product' method='POST'><input type='text' name='title'/><button type='submit'>Submit</button></form>")
})

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
})

export default router;