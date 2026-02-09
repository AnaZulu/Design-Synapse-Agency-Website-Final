# Contact Form Setup Instructions

Your Synapse website now has a fully functional contact form! Here's how to complete the setup:

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Free Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email address (where you want to receive form submissions)
3. Click "Get Access Key"
4. Check your email and copy your access key

### Step 2: Add Your Access Key to the Website

1. Open the file: `/src/app/pages/ContactPage.tsx`
2. Find line 26 where it says:
   ```typescript
   const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';
   ```
3. Replace `'YOUR_WEB3FORMS_ACCESS_KEY_HERE'` with your actual access key:
   ```typescript
   const WEB3FORMS_ACCESS_KEY = 'abc123-your-actual-key-xyz789';
   ```
4. Save the file

### Step 3: Test Your Form

1. Go to your contact page
2. Fill out the form
3. Click "Send Message"
4. Check your email inbox for the submission!

## ✨ Features

Your contact form now includes:

- ✅ **Full form validation** - Required fields are checked
- ✅ **Loading states** - Shows feedback while submitting
- ✅ **Success messages** - Confirms when submission is successful
- ✅ **Error handling** - Shows helpful messages if something goes wrong
- ✅ **Email notifications** - You receive an email for every submission
- ✅ **All form fields** - Name, Email, Company, Phone, Service, Budget, and Message
- ✅ **Mobile responsive** - Works perfectly on all devices
- ✅ **Bilingual support** - Works in both English and French

## 📧 What You'll Receive

When someone submits the contact form, you'll receive an email with:

- **Subject:** New Contact Form Submission from [Client Name]
- **Full Name**
- **Email Address**
- **Company Name** (if provided)
- **Phone Number** (if provided)
- **Service Interested In**
- **Project Budget** (if provided)
- **Project Details/Message**

## 🎨 Customization Options

### Change the email subject line:
In `/src/app/pages/ContactPage.tsx`, line 47:
```typescript
subject: `New Contact Form Submission from ${formData.name}`,
```

### Add additional fields:
1. Add the field to the `formData` state (line 9)
2. Add it to the `formPayload` (line 48)
3. Add the input field in the form JSX (around line 232)

### Change success message duration:
Line 64 - change `5000` (5 seconds) to your preferred duration:
```typescript
setTimeout(() => {
  setSubmitted(false);
  // ...
}, 5000); // Change this number (milliseconds)
```

## 🔒 Security & Privacy

- ✅ Web3Forms is GDPR compliant
- ✅ No data is stored by Web3Forms (emails are forwarded directly)
- ✅ Spam protection included
- ✅ Free tier includes 250 submissions per month
- ✅ SSL encrypted submissions

## 💡 Alternative Options

If you prefer different solutions:

### Option 1: Formspree
- Visit [formspree.io](https://formspree.io)
- Similar setup process
- Also free tier available

### Option 2: EmailJS
- Visit [emailjs.com](https://www.emailjs.com)
- Send emails directly from JavaScript
- Requires more configuration

### Option 3: Backend Integration
- Connect to your own backend API
- Use Supabase, Firebase, or custom server
- Provides more control and features

## 🆘 Troubleshooting

**Form submissions not working?**
1. Check that you've added your Web3Forms access key
2. Check browser console for error messages
3. Make sure all required fields are filled
4. Check your spam folder for the notification email

**Not receiving emails?**
1. Verify your email address with Web3Forms
2. Check spam/junk folder
3. Make sure the access key is correct
4. Try submitting again after 1-2 minutes

**Need help?**
- Web3Forms documentation: [https://docs.web3forms.com](https://docs.web3forms.com)
- Web3Forms support: support@web3forms.com

---

## 🎉 You're All Set!

Your contact form is now ready to receive client inquiries. The form will:
- ✅ Validate all inputs
- ✅ Show loading state while submitting
- ✅ Display success/error messages
- ✅ Send you an email notification
- ✅ Reset automatically after successful submission

Happy building! 🚀
