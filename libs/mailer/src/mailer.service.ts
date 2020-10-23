import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as mg from 'nodemailer-mailgun-transport';
import { ConfigService } from '@nestjs/config';

interface MailOptions {
  to: string;
  from: string;
  subject: string;
  html: string;
}

interface MailerResponse {
  id: string;
  message: string;
  messageId: string;
}

@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}

  async sendMail(options: MailOptions): Promise<any> {
    const mailgunAuth = {
      auth: {
        api_key: this.configService.get('mailer.apiKey'),
        domain: this.configService.get('mailer.domain'),
      },
    };

    const smtpTransport = nodemailer.createTransport(mg(mailgunAuth));

    const mailerResponse: MailerResponse = await smtpTransport.sendMail(
      options,
    );
    Logger.log(mailerResponse, 'skore.mailer');
    return mailerResponse;
  }
}
