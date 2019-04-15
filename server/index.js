const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();

sgMail.setApiKey('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');

app.use(cors());

// Welcome
app.get('/', (req, res) => {
    res.send('Welcome to the Sendgrid Email Server Tester')
});

// email page
app.get('/send-email', (req, res) => {
    // get Variable from query string
    const { sender, topic, mail, text } = req.query;

    // Sendgrid Requirements
    const msg = {
        from: sender,
        subject: topic,
        mail: mail,
        text: text, 
    }

    // Send Email
    sgMail.send(msg)
    .then((msg) => console.log(text))

})

app.listen(3606, () => console.log('Server running on Port 3606'));