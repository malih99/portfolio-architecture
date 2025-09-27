import emailjs from "emailjs-com";

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  if (!userId || !serviceId || !templateId)
    throw new Error("EmailJS env vars missing");

  const params = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  };

  return emailjs.send(serviceId, templateId, params, userId);
}
