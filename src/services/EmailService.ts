interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: Array<string>; //definir que essa propriedade nao e obrigatoria
}

interface IMessageDTO {
  // DTO = Data Tranfer Object (DDD)
  to: IMailTo;
  message: IMailMessage;
}

interface IMailServise {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IMailServise {
  // sendMail(to: IMailTo, message: IMailMessage) {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
