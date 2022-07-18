const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const { urlencoded } = require("express");

const app = express();
const port = 3000;

const route = require("./routes/index");
const db = require("./config/db/index");

db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.engine(
    "hbs",
    exphbs.engine({
        extname: ".hbs",
    }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

app.use(morgan("combined"));

route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
