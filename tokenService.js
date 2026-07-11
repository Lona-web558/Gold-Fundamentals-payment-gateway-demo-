const { v4: uuid } = require("uuid");

const tokenStore = {};

function createToken(card) {

    const token = uuid();

    tokenStore[token] = {
        card,
        created: Date.now()
    };

    return token;

}

module.exports = {
    createToken,
    tokenStore
};