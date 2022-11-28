class MessageCustom{
    messageValidateCustom(errorList) {
        return errorList.map(x => ({ [x.context.label]: x.message }));
    }
}

module.exports = new MessageCustom();