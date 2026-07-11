exports.validateCard = (req, res, next) => {

    const {
        card_number,
        expiry_month,
        expiry_year,
        cvc
    } = req.body;

    if (
        !card_number ||
        !expiry_month ||
        !expiry_year ||
        !cvc
    ) {
        return res.status(400).json({
            error: "Missing card information"
        });
    }

    next();
};

exports.validateCharge = (req, res, next) => {

    const {
        amount,
        currency,
        token
    } = req.body;

    if (!amount || !currency || !token) {
        return res.status(400).json({
            error: "Missing payment information"
        });
    }

    next();
};