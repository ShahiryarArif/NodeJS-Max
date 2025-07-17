import bodyParser from "body-parser";
import express from "express";
import adminRoutes from "./routes/admin.js"
import shopRoutes from "./routes/shop.js"

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes, shopRoutes);

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
})

app.listen(3000);