require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const paymentRoutes = require("./paymentRoutes");

const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname)));

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use("/v1", paymentRoutes);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Gateway.html"));
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
