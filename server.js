require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use("/v1", paymentRoutes);

app.get("/", (req, res) => {
    res.json({
        status: "Gateway Running"
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});