const {
    createToken,
    tokenStore
} = require("./tokenService");

exports.tokenizeCard = (req, res) => {

    const token = createToken(req.body);

    res.json({
        token
    });

};

exports.chargeCard = (req, res) => {

    const {
        token,
        amount,
        currency
    } = req.body;

    if (!tokenStore[token]) {

        return res.status(400).json({
            status: "failed",
            error: "Invalid token"
        });

    }

    if (amount <= 0) {

        return res.status(400).json({
            status: "failed",
            error: "Invalid amount"
        });

    }

    delete tokenStore[token];

    res.json({

        status: "succeeded",

        transaction_id:
            "TXN-" + Date.now(),

        amount,

        currency

    });

};
