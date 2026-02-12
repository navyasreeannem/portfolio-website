# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable real email functionality in your contact form. After following these steps, when someone fills out your contact form and clicks "Send Message", you'll receive their message directly in your email inbox at `navyasreeannem33@gmail.com`.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Set Up Email Service

1. **Add Email Service:**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail" (or your preferred email provider)
   - Connect your Gmail account (`navyasreeannem33@gmail.com`)
   - Give it a name like "Gmail Service"
   - **Copy the Service ID** (you'll need this later)

2. **Alternative: Use Custom SMTP:**
   - If you prefer, you can use any SMTP service
   - Popular options: Gmail, Outlook, SendGrid, Mailgun

## Step 3: Create Email Template

1. **Go to Email Templates:**
   - In your EmailJS dashboard, go to "Email Templates"
   - Click "Create New Template"

2. **Design Your Template:**
   - Give it a name like "Contact Form Template"
   - Set the subject: `New Contact Form Message from {{from_name}}`
   - Set the "To Email" to: `{{to_email}}` (this will be your email)

3. **Template Content:**
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   You have received a new message from your portfolio website:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   This message was sent from your portfolio contact form.
   ```

4. **Save and Copy Template ID:**
   - Save the template
   - **Copy the Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. In your EmailJS dashboard, go to "Account" → "API Keys"
2. **Copy your Public Key**

## Step 5: Update Your Contact Component

Replace the placeholder values in your `src/components/Contact.tsx` file:

```typescript
// Replace these placeholder values with your actual EmailJS credentials
const result = await emailjs.send(
  'YOUR_SERVICE_ID',        // Replace with your Service ID from Step 2
  'YOUR_TEMPLATE_ID',       // Replace with your Template ID from Step 3
  templateParams,
  'YOUR_PUBLIC_KEY'         // Replace with your Public Key from Step 4
);
```

## Step 6: Test Your Contact Form

1. Start your development server: `npm run dev`
2. Go to your contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox for the message

## Troubleshooting

### Common Issues:

1. **"Failed to send message" error:**
   - Check that all EmailJS credentials are correct
   - Ensure your email service is properly connected
   - Check browser console for detailed error messages

2. **Emails not received:**
   - Check spam/junk folder
   - Verify email service connection in EmailJS dashboard
   - Ensure template variables are correctly set

3. **CORS errors:**
   - EmailJS handles this automatically, but if issues persist, check your domain settings

### Security Notes:

- Your public key is safe to expose in frontend code
- EmailJS handles rate limiting and spam protection
- Free tier includes 200 emails/month (sufficient for portfolio use)

## Advanced Configuration (Optional)

### Custom Email Styling:
You can enhance your email template with HTML/CSS for better formatting.

### Auto-Reply:
Set up an auto-reply template to automatically respond to form submissions.

### Spam Protection:
EmailJS includes built-in spam protection, but you can add additional validation in your form.

## Support

If you encounter issues:
1. Check EmailJS documentation: [docs.emailjs.com](https://docs.emailjs.com/)
2. EmailJS support: support@emailjs.com
3. Check your browser's developer console for error messages

---

**Your contact form will now send real emails to `navyasreeannem33@gmail.com`!** 🎉

After completing this setup, visitors to your portfolio can fill out the contact form and you'll receive their messages directly in your inbox with all the details they provided.

