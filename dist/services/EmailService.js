"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    // sendMail(to: IMailTo, message: IMailMessage) {
    sendMail({ to, message }) {
        console.log(`Email enviado para ${to.name}: ${message.subject}`);
    }
}
exports.default = EmailService;
