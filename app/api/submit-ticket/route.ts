import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, licenseKey, subject, category, priority, description } = body

    // Validate required fields
    if (!name || !email || !licenseKey || !subject || !category || !priority || !description) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Generate ticket number
    const ticketNumber = `TK${Date.now().toString().slice(-6)}`

    // Prepare email content for support team
    const emailContent = {
      to: 'support@fare2u.com',
      from: 'noreply@fare2u.com',
      subject: `[${priority.toUpperCase()}] New Support Ticket #${ticketNumber}: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #374151; display: block; margin-bottom: 5px; }
              .value { color: #1f2937; padding: 10px; background: white; border-radius: 4px; border: 1px solid #e5e7eb; }
              .priority-high { color: #dc2626; font-weight: bold; }
              .priority-urgent { color: #991b1b; font-weight: bold; }
              .priority-medium { color: #f59e0b; font-weight: bold; }
              .priority-low { color: #10b981; font-weight: bold; }
              .footer { background: #1f2937; color: #9ca3af; padding: 15px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">🎫 New Support Ticket</h1>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Ticket #${ticketNumber}</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Priority:</span>
                  <div class="value priority-${priority}">${priority.toUpperCase()}</div>
                </div>
                <div class="field">
                  <span class="label">Category:</span>
                  <div class="value">${category}</div>
                </div>
                <div class="field">
                  <span class="label">Subject:</span>
                  <div class="value">${subject}</div>
                </div>
                <div class="field">
                  <span class="label">From:</span>
                  <div class="value">${name} (${email})</div>
                </div>
                <div class="field">
                  <span class="label">License Key:</span>
                  <div class="value"><code>${licenseKey}</code></div>
                </div>
                <div class="field">
                  <span class="label">Description:</span>
                  <div class="value" style="white-space: pre-wrap;">${description}</div>
                </div>
                <div class="field">
                  <span class="label">Submitted:</span>
                  <div class="value">${new Date().toLocaleString()}</div>
                </div>
              </div>
              <div class="footer">
                <p>Fare2u Support System | support@fare2u.com</p>
                <p>Reply to this email to respond to the customer</p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
New Support Ticket #${ticketNumber}

Priority: ${priority.toUpperCase()}
Category: ${category}
Subject: ${subject}

From: ${name}
Email: ${email}
License Key: ${licenseKey}

Description:
${description}

Submitted: ${new Date().toLocaleString()}

---
Fare2u Support System
support@fare2u.com
      `.trim(),
    }

    // TODO: Integrate with your email service (Resend, SendGrid, etc.)
    // For now, we'll log the email content and return success
    // Uncomment and configure your preferred email service below:

    /*
    // Example with Resend:
    // npm install resend
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: emailContent.from,
    //   to: emailContent.to,
    //   subject: emailContent.subject,
    //   html: emailContent.html,
    // })

    // Example with SendGrid:
    // npm install @sendgrid/mail
    // import sgMail from '@sendgrid/mail'
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
    // await sgMail.send(emailContent)

    // Example with Nodemailer (SMTP):
    // npm install nodemailer
    // import nodemailer from 'nodemailer'
    // const transporter = nodemailer.createTransport({
    //   host: process.env.SMTP_HOST,
    //   port: Number(process.env.SMTP_PORT),
    //   auth: {
    //     user: process.env.SMTP_USER,
    //     pass: process.env.SMTP_PASS,
    //   },
    // })
    // await transporter.sendMail(emailContent)
    */

    // Log ticket details (for development)
    console.log('📧 Support Ticket Received:')
    console.log(`Ticket #${ticketNumber}`)
    console.log(`From: ${name} (${email})`)
    console.log(`Priority: ${priority}`)
    console.log(`Subject: ${subject}`)
    console.log('---')

    // Also send confirmation email to customer
    const confirmationEmail = {
      to: email,
      from: 'support@fare2u.com',
      subject: `Ticket #${ticketNumber} Received - Fare2u Support`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
              .ticket-box { background: white; border: 2px solid #16a34a; border-radius: 8px; padding: 20px; margin: 20px 0; }
              .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 12px; }
              .button { display: inline-block; background: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0;">✅ Ticket Received</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">We've got your support request</p>
              </div>
              <div class="content">
                <p>Hi ${name},</p>
                <p>Thank you for contacting Fare2u support! We've received your ticket and our team will get back to you within 24-48 hours.</p>
                
                <div class="ticket-box">
                  <h2 style="margin: 0 0 15px 0; color: #16a34a;">Ticket #${ticketNumber}</h2>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <p><strong>Priority:</strong> ${priority.charAt(0).toUpperCase() + priority.slice(1)}</p>
                  <p><strong>Category:</strong> ${category}</p>
                </div>

                <p><strong>What happens next?</strong></p>
                <ul>
                  <li>Our support team will review your ticket</li>
                  <li>We'll respond to you at ${email}</li>
                  <li>You can reply to this email to add more information</li>
                </ul>

                <p>In the meantime, you might find these resources helpful:</p>
                <ul>
                  <li><a href="https://fare2u.com/documentation">Documentation</a> - Complete user guide</li>
                  <li><a href="https://fare2u.com/help">Help Center</a> - Browse FAQs</li>
                  <li><a href="https://lsk.fare2u.com/auth/login">Live Demo</a> - Try Fare2u</li>
                </ul>

                <p>Best regards,<br><strong>Fare2u Support Team</strong></p>
              </div>
              <div class="footer">
                <p><strong>Fare2u - Livestock Management Made Simple</strong></p>
                <p>support@fare2u.com | https://fare2u.com</p>
                <p>Please do not reply to this email directly. Reply to your ticket confirmation instead.</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    // Send support team notification email
    await resend.emails.send({
      from: 'Fare2u Support <support@fare2u.com>',
      to: 'support@fare2u.com',
      subject: emailContent.subject,
      html: emailContent.html,
    })

    // Send customer confirmation email
    await resend.emails.send({
      from: 'Fare2u Support <support@fare2u.com>',
      to: email,
      subject: confirmationEmail.subject,
      html: confirmationEmail.html,
    })

    console.log(`✅ Ticket #${ticketNumber} submitted successfully`)
    console.log(`📧 Support notification sent to support@fare2u.com`)
    console.log(`📧 Confirmation email sent to ${email}`)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        ticketNumber,
        message: 'Support ticket submitted successfully',
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error submitting ticket:', error)
    return NextResponse.json(
      { error: 'Failed to submit ticket. Please try again.' },
      { status: 500 }
    )
  }
}
