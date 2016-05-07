module.exports = {

    sendFeedbackEmail: function(options) {

        var opts = {"type":"messages","call":"send","message":
            {
                "from_email": options.email,
                "feedback" : options.feedback,
                "to":[
                    {"email": "ankitkumarsharma939@gmail.com"}
                ],
                "text": "You have recieved a feedback message from www.bdcoe.co.in.\n"+"The email of sender is:\n"+ options.email +"The feedback message is:\n"+ options.feedback
            }
        };

        myEmailSendingLibrary.send(opts);

    }
};