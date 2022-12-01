class MessageCustom{
    validate(errorList) {
        return errorList.map(x => ({ [x.context.label]: x.message }));
    }

    apiResponse(data, message){
        return {
            isSuccess: true,
            data: data,
            message: message
        }
    }
}

module.exports = new MessageCustom();