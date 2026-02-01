import emailjs from 'emailjs-com';

// Initialize EmailJS with your credentials
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const EmailService = {
  // Configure EmailJS to use your SMTP settings
  sendEmail: async (formData) => {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      to_email: 'hello@scaleforgelabs.com',
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    };

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Email send error:', error);
      return { success: false, message: 'Failed to send email. Please try again.' };
    }
  }
};

export default EmailService;