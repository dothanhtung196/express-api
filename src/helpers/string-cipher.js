require("dotenv").config();
const bcrypt = require("bcrypt");

class StringCipher {
    constructor() {
        this.round = process.env.ROUND;
    }

    async hashPassword(password) {
        const salt = await bcrypt.genSaltSync(Number(this.round));
        let result = await bcrypt.hashSync(password.toString(), salt);

        if (result) return result;
        else return "";
    }

    async comparePassword(password, hash) {
        var result = await bcrypt.compareSync(password, hash);

        if (result) return result;
        else return false;
    }
}

module.exports = new StringCipher();
