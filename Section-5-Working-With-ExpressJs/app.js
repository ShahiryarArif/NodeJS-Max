import bodyParser from "body-parser";
import express from "express";
import { join } from "path";
import adminRoutes from "./routes/admin.js"
import shopRoutes from "./routes/shop.js"
import { rootDir } from "./util/contants.js";

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(join(rootDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  console.log("In the middleware");
  next();
})

app.use((req, res, next) => {
  res.status(404).sendFile(rootDir, "views", "404.html")
})

app.listen(3000);