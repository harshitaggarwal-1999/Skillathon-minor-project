/*import bcrypt from 'bcrypt';
import { PubSub } from 'graphql-subscriptions';
import _ from 'lodash';
import joinMonster from 'join-monster';
import jwt from 'jsonwebtoken';
import { requiresAuth, requiresAdmin } from './permissions';
import { refreshTokens, tryLogin } from './auth';
export const pubsub = new PubSub();
const USER_ADDED = 'USER_ADDED';
jwt.sign(
    {
      user: _.pick(user, 'id'),
    },
    EMAIL_SECRET,
    {
      expiresIn: '1d',
    },
    (err, emailToken) => {
      const url = `http://localhost:3000/confirmation/${emailToken}`;
      transporter.sendMail({
        to: req.body.email,
        subject: 'Confirm Email',
        html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
      });
    },
  );*/
  "use strict";
  const nodemailer = require("nodemailer");

module.exports.send_email = () => {
      var transporter = nodemailer.createTransport({
          service:"gmail",
       //   host: "smtp.gmail.com",
          secure: false, 
          auth: {
            user: "Skillathon",
            pass: "website@123"
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        const mail = {
          from: "Skillathon",
          to: "sumedhasachdev",
          subject: "HELLO",
          text: "Hi"
        };

        transporter.sendEMail = function (mail) {
            return new Promise(function (resolve, reject) {
              transporter.sendMail(mail, (error, info) => {
                if (error) {
                  reject(error);
                } else {
                  resolve("The message was sent!");
                }
              });
            });
          }
       
}