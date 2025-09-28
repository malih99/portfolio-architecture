import emailjs from "emailjs-com";

type FormData = { name: string; email: string; message: string };

export async function sendContactEmail(data: FormData) {
  const userId = import.meta.env.VITE_EMAILJS_USER_ID;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  if (!userId || !serviceId || !templateId) {
    throw new Error("EmailJS env vars missing");
  }

  const params = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  };

  try {
    const res = await emailjs.send(serviceId, templateId, params, userId);
    if (res.status !== 200) {
      throw new Error(`Email service error (${res.status})`);
    }
  } catch (err: any) {
    throw new Error(err?.text || err?.message || "Unable to send email");
  }
}
