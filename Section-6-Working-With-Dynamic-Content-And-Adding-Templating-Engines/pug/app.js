const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "pug");

app.set("views", "views");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render("404.pug", { pageTitle: "Page Not Found" });
});

app.listen(3000);

