import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "../components/ui/Button";
import { sendContactEmail } from "../services/email";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const schema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  message: yup.string().min(10, "Too short").required("Required"),
});

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [toast, setToast] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">{t("getInTouch")}</h1>

      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={schema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            await sendContactEmail(values);
            setToast({ type: "success", text: t("contactSuccess") });
            resetForm();
          } catch (e: any) {
            setToast({
              type: "error",
              text: t("contactFail") + (e?.message ? `: ${e.message}` : ""),
            });
          } finally {
            setSubmitting(false);
            setTimeout(() => setToast(null), 5000);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {t("name")}
              </label>
              <Field
                name="name"
                className="w-full border rounded-md px-3 py-2 dark:bg-gray-800"
              />
              <div className="text-red-500 text-sm mt-1">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                {t("email")}
              </label>
              <Field
                name="email"
                className="w-full border rounded-md px-3 py-2 dark:bg-gray-800"
              />
              <div className="text-red-500 text-sm mt-1">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                {t("message")}
              </label>
              <Field
                as="textarea"
                name="message"
                rows={6}
                className="w-full border rounded-md px-3 py-2 dark:bg-gray-800"
              />
              <div className="text-red-500 text-sm mt-1">
                <ErrorMessage name="message" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("sending") : t("sendMessage")}
              </Button>
            </div>
          </Form>
        )}
      </Formik>

      {/* Toast */}
      <div
        aria-live="polite"
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              className={`px-4 py-3 rounded-md shadow-lg ${toast.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
            >
              {toast.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;
