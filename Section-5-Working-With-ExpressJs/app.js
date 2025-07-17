import bodyParser from "body-parser";
import express from "express";
import adminRoutes from "./routes/admin.js"
import shopRoutes from "./routes/shop.js"
import { __dirname } from "./util/contants.js";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes, shopRoutes);

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
})

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname, "views", "404.html")
})

app.listen(3000);