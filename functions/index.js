'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

//to make it work you need gmail account
const gmailEmail = "vanillanoteapp@gmail.com"; //functions.config().gmail.login;
const gmailPassword = "vanillanoteapp123";//functions.config().gmail.pass;

admin.initializeApp();

//creating function for sending emails
var goMail = function (text1, text2, text3) {

//transporter is a way to send your emails
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: gmailEmail,
            pass: gmailPassword
        }
    });

    // setup email data with unicode symbols
    //this is how your email are going to look like
    const mailOptions = {
        from: gmailEmail, // sender address
        to: 'hello@vanillabrain.com', // list of receivers
        subject: 'Vanilla Note App 문의', // Subject line
        text: text1 + text2 + text3, // plain text body
        html: `Sender Name: ${text1} <br /> Sender Email Address: ${text2} <br /> Content: ${text3}`
    };

    //this is callback function to return status to firebase console
    const getDeliveryStatus = function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    };

    //call of this function send an email, and return status
    transporter.sendMail(mailOptions, getDeliveryStatus);
};

//.onDataAdded is watches for changes in database
exports.onDataAdded = functions.database.ref('/queries/{sessionId}').onCreate(function (snap, context) {

    //here we catch a new data, added to firebase database, it stored in a snap variable
    const createdData = snap.val();
    var text2 = createdData.mail;
    var text1 = createdData.writerName;
    var text3 = createdData.content;
    var text = "Sender Name: " + text1
        + "Sender Email Address: "
    + text2 + "Content: " + text3;
    //here we send new data using function for sending emails
    goMail(text1, text2, text3);
});
