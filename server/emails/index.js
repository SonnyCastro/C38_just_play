const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const htmlEmail = `
  <style>
  .sampleH1{
    color: blue;
  }
  </style>
  <h1 class="sampleh1" >Welcome to JustPlay</h1>
  <div>We hope you find our app useful </div>
  <div>Feel free to contact us if you have any questions or concerns! </div>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Thanks for signing up!',
    text: `Hi ${name}! Welcome to JustPlay.`,
    html: htmlEmail,
  });
};

const forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Password Reset.',
    // text: `Hi ${name}! Please click the link below to reset your password.`
    html: exampleHTMLEmail,
  });
};

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Sorry to see you go.',
    text: `Bye ${name}. Hope to see you soon.`,
  });
};

const sendReservationEmail = (email, name) => {
  const htmlEmailResevation = `
  <style>
  .sampleH1{
    color: blue;
  }
  </style>
  <h1 class="sampleH1" >Your Reservation has been Confirmed!</h1>
  <div>We hope you find our app useful </div>
  <div>Feel free to contact us if you have any questions or concerns! Enjoy ${name} </div>
  `;

  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Reservation Confirmation',
    html: htmlEmailResevation,
  });
};

const PasswordEmail = (email, token) => {
  const exampleHTMLEmail = `
  <div>Click the link below to reset your password</div>
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
  `;

  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Password Reset.',
    // text: `Hi ${name}! Please click the link below to reset your password.`
    html: exampleHTMLEmail,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
  PasswordEmail,
  forgotPasswordEmail,
  sendReservationEmail,
};
