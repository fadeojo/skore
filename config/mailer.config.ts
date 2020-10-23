import { registerAs } from '@nestjs/config';

interface MailerConfig {
  apiKey: string;
  domain: string;
}

export default registerAs(
  'mailer',
  (): MailerConfig => ({
    apiKey: process.env.MAILGUN_APIKEY,
    domain: process.env.MAILGUN_DOMAIN,
  }),
);
