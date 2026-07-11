const express = require("express");

const router = express.Router();

const {
    tokenizeCard,
    chargeCard
} = require("./paymentController");

const {
    validateCard,
    validateCharge
} = require("./validationMiddleware");

router.post("/tokens", validateCard, tokenizeCard);

router.post("/charges", validateCharge, chargeCard);

module.exports = router;
