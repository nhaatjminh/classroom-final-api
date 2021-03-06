//const sgMail = require('@sendgrid/mail')
//const apiKey = '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';

const nodemailer =  require('nodemailer');

var transporter =  nodemailer.createTransport({ // config mail server
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'bestlophoc@gmail.com',
        pass: 'lophoc123'
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    }
});


exports.sendEmail = async (recipient, invitelink, role) => {
    var result = true;
    var Options = {
        from: '"CLASSROOM" bestlophoc@gmail.com', // sender address
        to: recipient, // list of receivers
        subject: "[CLASS INVITATION]", // Subject line
        text: 'You are invited to this class as a ' + role + ': ' + invitelink, // plain text body
        //html: "<b>Hello world?</b>", // html body
    }

    await transporter.sendMail(Options, (err, info) => {
        if (err) {
            result = false;
        }
    });

    return result;
    
}

exports.sendVerifyEmail = async (recipient, code) => {
    var result = true;
    console.log(recipient);
    var Options = {
        from: '"CLASSROOM" bestlophoc@gmail.com', // sender address
        to: recipient, // list of receivers
        subject: "[CLASSROOM VERIFY]", // Subject line
        text: 'Your verify code: ' + code, // plain text body
    }

    await transporter.sendMail(Options, (err, info) => {
        if (err) {
            result = false;
        }
    });

    return result;
    
}


// exports.sendEmail = async (recipient, invitelink, role) => {
//     sgMail.setApiKey(apiKey)
//     var result = false;

//     const msg = {
//         to: recipient,
//         from: {
//             name: 'CLASSROOM',
//             email: '18127153@student.hcmus.edu.vn'
//         },
//         subject: '[CLASS INVITATION]',
//         text: 'You are invited to this class as a ' + role + ': ' + invitelink,
//         // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//       }
      
//     await sgMail
//     .send(msg)
//     .then(() => {
//         result = true;
//     })
//     .catch((error) => {
//         console.error(error)
//     })

//     return result;
// }
