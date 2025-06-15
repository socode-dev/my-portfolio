import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../components/layouts/SectionWrapper";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/form/ContactForm";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdkzzokq");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [emailErr, setEmailErr] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(value)) {
        setEmailErr("Please enter a valid email address.");
      } else {
        setEmailErr("");
      }
    }
  };

  const onSubmit = (e) => {
    handleSubmit(e);

    if (state.errors) {
      setError("❌ Something went wrong.");
      setSuccessMessage("");

      setTimeout(() => setError(""), 10000);
    }

    if (state.succeeded) {
      setSuccessMessage("✅ Your message has been sent!");
      setError("");

      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSuccessMessage(""), 10000);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: "-100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <SectionWrapper className="flex flex-col md:flex-row md:justify-between items-center gap-10">
        <ContactHero />
      </SectionWrapper>

      <SectionWrapper className="space-y-6 w-fit mx-auto">
        <ContactForm
          formData={formData}
          handleChange={handleChange}
          emailErr={emailErr}
          state={state}
          onSubmit={onSubmit}
          error={error}
          successMessage={successMessage}
        />
      </SectionWrapper>
    </motion.main>
  );
};

export default Contact;
