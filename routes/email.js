const express = require('express'),
    Router = express.Router();

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

Router.post('/', (req, res) => {
    const msg = {
        to: 'duhan.sachin126@gmail.com',
        from: 'test@example.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg).then(doc => {
        return res.status(200).json({
            message: 'email sent!',
            email: doc
        })
    }).catch(err => {
        return res.status(400).json({
            message: 'email not sent!',
            error: err
        })
    })
});

// author : sachin duhan
// contact : 8586821051
// email : duhan.sachin126@gmail.com

module.exports = Router;
