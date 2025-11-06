# Email Configuration for Support Tickets

The support ticket system is now functional! Tickets are submitted to `/api/submit-ticket` but email sending needs to be configured.

## Current Status

✅ **Ticket submission is working** - tickets are received and validated
✅ **Email templates are ready** - both support team and customer confirmation emails
⚠️ **Email sending needs configuration** - choose your preferred email service below

## Quick Setup Options

### Option 1: Resend (Recommended - Modern & Simple)

Resend is a modern email API designed for developers. Free tier includes 3,000 emails/month.

1. **Install Resend:**
   ```bash
   npm install resend
   ```

2. **Get API Key:**
   - Sign up at https://resend.com
   - Create an API key
   - Verify your domain (or use their test domain for development)

3. **Add to `.env.local`:**
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   ```

4. **Update `app/api/submit-ticket/route.ts`:**
   ```typescript
   // Uncomment these lines (around line 87):
   import { Resend } from 'resend'
   const resend = new Resend(process.env.RESEND_API_KEY)
   
   // Send support team notification
   await resend.emails.send({
     from: 'support@fare2u.com',
     to: 'support@fare2u.com',
     subject: emailContent.subject,
     html: emailContent.html,
   })
   
   // Send customer confirmation
   await resend.emails.send({
     from: 'support@fare2u.com',
     to: email,
     subject: confirmationEmail.subject,
     html: confirmationEmail.html,
   })
   ```

### Option 2: SendGrid (Popular Choice)

SendGrid offers 100 emails/day on free tier.

1. **Install SendGrid:**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Get API Key:**
   - Sign up at https://sendgrid.com
   - Create an API key
   - Verify your sender email

3. **Add to `.env.local`:**
   ```env
   SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
   ```

4. **Update `app/api/submit-ticket/route.ts`:**
   ```typescript
   // Uncomment these lines:
   import sgMail from '@sendgrid/mail'
   sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
   
   await sgMail.send({
     from: 'support@fare2u.com',
     to: 'support@fare2u.com',
     subject: emailContent.subject,
     html: emailContent.html,
   })
   
   await sgMail.send({
     from: 'support@fare2u.com',
     to: email,
     subject: confirmationEmail.subject,
     html: confirmationEmail.html,
   })
   ```

### Option 3: Nodemailer (Use Your Own SMTP)

Works with any SMTP provider (Gmail, Office 365, etc.)

1. **Install Nodemailer:**
   ```bash
   npm install nodemailer
   ```

2. **Add to `.env.local`:**
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

3. **Update `app/api/submit-ticket/route.ts`:**
   ```typescript
   // Uncomment these lines:
   import nodemailer from 'nodemailer'
   
   const transporter = nodemailer.createTransport({
     host: process.env.SMTP_HOST,
     port: Number(process.env.SMTP_PORT),
     secure: false,
     auth: {
       user: process.env.SMTP_USER,
       pass: process.env.SMTP_PASS,
     },
   })
   
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: 'support@fare2u.com',
     subject: emailContent.subject,
     html: emailContent.html,
   })
   
   await transporter.sendMail({
     from: process.env.SMTP_USER,
     to: email,
     subject: confirmationEmail.subject,
     html: confirmationEmail.html,
   })
   ```

## Email Templates

Two email templates are included:

1. **Support Team Notification** (`support@fare2u.com`)
   - Ticket details with priority highlighting
   - Customer information
   - Full ticket description
   - Professional formatting

2. **Customer Confirmation** (sent to submitter)
   - Ticket number confirmation
   - What to expect next
   - Helpful resources links
   - Response time expectations

## Testing

### Development Testing

For development, tickets are logged to console. Check your terminal/logs to see:
```
📧 Support Ticket Received:
Ticket #TK123456
From: John Doe (john@example.com)
Priority: high
Subject: Need help with installation
---
```

### Production Testing

1. Configure your email service (see options above)
2. Test with a real email address
3. Check both support inbox and customer confirmation

## Customization

### Change Support Email

Update these values in `app/api/submit-ticket/route.ts`:
```typescript
to: 'support@fare2u.com',  // Change this
from: 'noreply@fare2u.com', // And this
```

### Modify Email Templates

Email templates are in the `emailContent` and `confirmationEmail` objects.
Both HTML and plain text versions are included.

### Add Additional Recipients

To CC or BCC additional emails:
```typescript
await resend.emails.send({
  from: 'support@fare2u.com',
  to: ['support@fare2u.com', 'admin@fare2u.com'],
  subject: emailContent.subject,
  html: emailContent.html,
})
```

## Troubleshooting

### Emails not sending

1. Check API key is correct in `.env.local`
2. Verify domain/email is verified with your provider
3. Check server logs for error messages
4. Test API key with a simple curl request

### Emails going to spam

1. Configure SPF, DKIM, and DMARC records for your domain
2. Use a verified sending domain
3. Warm up your sending domain gradually
4. Check your email content doesn't trigger spam filters

## Support

For issues with:
- **Ticket system**: Check the API route logs
- **Email service**: Refer to your provider's documentation
- **Fare2u general**: Contact support@fare2u.com
