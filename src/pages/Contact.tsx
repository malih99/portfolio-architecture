import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "../components/ui/Button";
import { sendContactEmail } from "../services/email";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const schema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().min(10, "Too short").required("Required"),
});

const fieldBase =
  "w-full h-10 rounded-md border border-zinc-300 dark:border-zinc-700 " +
  "bg-white dark:bg-zinc-900 placeholder:text-zinc-400 " +
  "px-3 text-[14px] text-zinc-900 dark:text-zinc-100 " +
  "outline-none focus:ring-4 ring-indigo-500/20 focus:border-indigo-500";

const textareaBase =
  "w-full rounded-md border border-zinc-300 dark:border-zinc-700 " +
  "bg-white dark:bg-zinc-900 placeholder:text-zinc-400 " +
  "px-3 py-2.5 text-[14px] text-zinc-900 dark:text-zinc-100 " +
  "outline-none focus:ring-4 ring-indigo-500/20 focus:border-indigo-500";

const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({
  className = "",
  ...rest
}) => (
  <label
    className={
      "block text-[13px] font-medium mb-1 text-zinc-700 dark:text-zinc-300 " +
      className
    }
    {...rest}
  />
);

const Contact: React.FC = () => {
  const { t, i18n } = useTranslation();

  const tt = (key: string, fallback: string) => {
    const val = t(key);
    return val === key ? fallback : val;
  };

  return (
    <div
      className="mx-auto max-w-screen-sm md:max-w-screen-md px-4 md:px-6 py-8 md:py-12"
      dir={i18n.dir()}
    >
      <div className="mb-6">
        <div className="text-[11px] uppercase tracking-wider text-indigo-600 font-semibold">
          {tt("contactEyebrow", "Contact")}
        </div>
        <h2 className="mt-1 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {tt("getInTouch", "Get in touch")}
        </h2>
        <p className="mt-2 text-[13.5px] text-zinc-700 dark:text-zinc-300">
          {tt("contactSubtitle", "We’ll get back to you as soon as possible.")}
        </p>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-xl border border-zinc-200 dark:border-white/[.08] bg-white dark:bg-zinc-900 shadow-sm"
      >
        <div className="p-5">
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validationSchema={schema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              const p = sendContactEmail(values);
              toast.promise(p, {
                loading: tt("sending", "Sending..."),
                success: tt("contactSuccess", "Thanks! Your message was sent."),
                error: (e) =>
                  tt("contactFail", "Failed to send") +
                  (e?.message ? `: ${e.message}` : ""),
              });
              try {
                await p;
                resetForm();
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Label htmlFor="name">{tt("name", "Name")}</Label>
                  <Field
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder={tt("yourName", "Your name")}
                    className={fieldBase}
                  />
                  <div className="text-red-500 text-[12px] mt-1">
                    <ErrorMessage name="name" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">{tt("email", "Email")}</Label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={tt("yourEmail", "you@example.com")}
                    className={fieldBase}
                  />
                  <div className="text-red-500 text-[12px] mt-1">
                    <ErrorMessage name="email" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">{tt("message", "Message")}</Label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={tt("yourMessage", "Write your message...")}
                    className={textareaBase}
                  />
                  <div className="text-red-500 text-[12px] mt-1">
                    <ErrorMessage name="message" />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 text-[14.5px]"
                >
                  {tt("sendMessage", "Send Message")}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </motion.section>

      <p className="mt-6 text-[13px] text-zinc-600 dark:text-zinc-400">
        {tt(
          "contactNote",
          "Prefer email? We usually respond within one business day."
        )}
      </p>
    </div>
  );
};

export default Contact;
