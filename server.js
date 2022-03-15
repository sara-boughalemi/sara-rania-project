const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const mongoURI = process.env.MONGO_URI;

app.use(bodyParser.json({ limit: "50mb" }));
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: true,
        parameterLimit: 50000,
    })
);
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use("/public", express.static("public"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`server is running on port: ${PORT}`);
});
app.use("/api/admin", require("./routes/admin"));
app.use("/api/users/", require("./routes/user"));
app.use("/api/posts/", require("./routes/post"));
