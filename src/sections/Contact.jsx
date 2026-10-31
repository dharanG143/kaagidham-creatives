import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

/* The reference screenshots have no phone input. Phone validation is fully
   implemented, but the field only renders when this is set to true. */
const SHOW_PHONE_FIELD = false;

const SUBJECT_OPTIONS = [
  "Brand Identity Systems",
  "Packaging Design",
  "Out-of-Home & Print",
  "Social Media Creatives",
  "Other",
];

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  subject: SUBJECT_OPTIONS[0],
  message: "",
};

const NAME_REGEX = /^\p{L}[\p{L}\s.'-]*$/u;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;

const validateField = (field, rawValue) => {
  const value = rawValue.trim();

  switch (field) {
    case "name":
      if (!value) return "Please enter your name.";
      if (value.length < 2) return "Name must be at least 2 characters.";
      if (!NAME_REGEX.test(value))
        return "Name can only contain letters, spaces, apostrophes, dots and hyphens.";
      return "";

    case "email":
      if (!value) return "Please enter your email.";
      if (!EMAIL_REGEX.test(value))
        return "Please enter a valid email address.";
      return "";

    case "phone": {
      if (!SHOW_PHONE_FIELD) return "";
      if (!value) return "Please enter your phone number.";
      if (/[^\d\s+-]/.test(value))
        return "Phone number can only contain digits, spaces, + and -.";
      const digits = value
        .replace(/[\s-]/g, "")
        .replace(/^(\+91|91|0)(?=\d{10}$)/, "");
      if (!/^\d{10}$/.test(digits)) return "Enter a 10-digit mobile number.";
      if (!PHONE_REGEX.test(digits))
        return "Enter a valid Indian mobile number (starts with 6-9).";
      return "";
    }

    case "subject":
      if (!value) return "Please select a subject.";
      return "";

    case "message":
      if (!value) return "Please tell us about your project.";
      if (value.length < 10) return "Message must be at least 10 characters.";
      return "";

    default:
      return "";
  }
};

const FIELD_ORDER = ["name", "email", "phone", "subject", "message"];

const Contact = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setSuccess(false);
    // Re-validate live only for fields that currently show an error,
    // so the message disappears as soon as the input is corrected.
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.trim() === "" && !errors[name] && name !== "subject") return;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};
    FIELD_ORDER.forEach((field) => {
      const message = validateField(field, values[field]);
      if (message) nextErrors[field] = message;
    });
    setErrors(nextErrors);

    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setSuccess(false);
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    // Frontend-only: no backend or API call is made.
    setSuccess(true);
    setValues(INITIAL_VALUES);
    setErrors({});
  };

  const inputClass = (field) =>
    `w-full rounded-[16px] border-2 bg-white px-[18px] text-base text-black outline-none placeholder:text-[#8A8A8A] md:text-[15px] ${
      errors[field] ? "border-red-600" : "border-black"
    }`;

  const ErrorText = ({ field }) =>
    errors[field] ? (
      <p
        id={`contact-${field}-error`}
        className="mt-1.5 px-1 text-[13px] font-medium leading-snug text-red-600"
      >
        {errors[field]}
      </p>
    ) : null;

  const ariaProps = (field) => ({
    "aria-invalid": errors[field] ? "true" : "false",
    "aria-describedby": errors[field] ? `contact-${field}-error` : undefined,
  });

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-full scroll-mt-16 bg-cream sm:max-w-[78%] 2xl:max-w-[1180px]"
    >
      <div className=" grid w-full grid-cols-1 gap-x-[41px] gap-y-12 px-5 py-6 sm:px-[43px] lg:grid-cols-[minmax(0,1fr)_300px] min-[1440px]:grid-cols-[minmax(0,568px)_1fr]">
        {/* Left column */}
        <div>
          <h2 className="max-w-[500px] text-[30px] font-extrabold leading-[1.1] tracking-[-0.01em] text-black min-[400px]:text-[38px] sm:text-[46px] md:text-[50px]">
            Have a creative project{" "}
            <span
              className="inline-block px-[6px]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, transparent 62%, var(--color-yellow) 62%, var(--color-yellow) 96%, transparent 96%)",
              }}
            >
              in mind?
            </span>
          </h2>

          <p className="mt-4 max-w-[520px] text-[18px] font-normal leading-[31px] text-[#555555] md:text-[20px]">
            Let’s turn your ideas into meaningful, purpose-driven creative work.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-[30px] flex flex-col gap-[15px]"
          >
            {/* Name */}
            <div>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your name"
                autoComplete="name"
                className={`${inputClass("name")} h-[56px]`}
                {...ariaProps("name")}
              />
              <ErrorText field="name" />
            </div>

            {/* Email */}
            <div>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Your email"
                autoComplete="email"
                className={`${inputClass("email")} h-[56px]`}
                {...ariaProps("email")}
              />
              <ErrorText field="email" />
            </div>

            {/* Phone (hidden to match reference; set SHOW_PHONE_FIELD = true to enable) */}
            {SHOW_PHONE_FIELD && (
              <div>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your phone number"
                  autoComplete="tel"
                  inputMode="tel"
                  className={`${inputClass("phone")} h-[56px]`}
                  {...ariaProps("phone")}
                />
                <ErrorText field="phone" />
              </div>
            )}

            {/* Subject */}
            <div>
              <select
                id="contact-subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`${inputClass("subject")} h-[55px] pr-3 font-medium`}
                {...ariaProps("subject")}
              >
                {SUBJECT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ErrorText field="subject" />
            </div>

            {/* Message */}
            <div>
              <textarea
                id="contact-message"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Tell us about your project"
                className={`${inputClass("message")} block h-[155px] resize-y py-[16px]`}
                {...ariaProps("message")}
              />
              <ErrorText field="message" />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex h-[54px] w-fit items-center justify-center rounded-full border-2 border-black bg-yellow px-[26px] text-[15px] font-bold text-black shadow-[4px_4px_0_0_#000]"
            >
              Send message →
            </button>

            {success && (
              <p
                role="status"
                className="text-[14px] font-semibold leading-snug text-green-700"
              >
               Message sent successfully!
              </p>
            )}
          </form>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-[30px] lg:pt-[12px]">
          {/* Studio */}
          <div className="flex items-start gap-4">
            <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border-2 border-black bg-yellow">
              <MapPin size={20} strokeWidth={2} className="text-black" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-[#555555]">
                Studio
              </p>
              <p className="text-[16px] font-normal leading-[26px] text-black">
                C10, RE Apartments,
                <br />
                Krishnapuram Street, Choolaimedu,
                <br />
                Chennai - 600094
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border-2 border-black bg-yellow">
              <Mail size={20} strokeWidth={2} className="text-black" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-[#555555]">
                Email
              </p>
              <a
                href="mailto:contact.kaagidhamcreatives@gmail.com"
                className="break-words text-[16px] font-bold leading-[26px] text-black hover:underline"
              >
                contact.kaagidhamcreatives@gmail.com
              </a>
            </div>
          </div>

          {/* Call or WhatsApp */}
          <div className="flex items-start gap-4">
            <span className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border-2 border-black bg-yellow">
              <Phone size={20} strokeWidth={2} className="text-black" />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase leading-[18px] tracking-[0.15em] text-[#555555]">
                Call or WhatsApp
              </p>
              <p className="text-[16px] font-bold leading-[26px] text-black">
                <a href="tel:+918939553359" className="hover:underline">
                  +91 89395 53359
                </a>
                <span className="font-normal"> · </span>
                <a
                  href="https://wa.me/918939553359"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal text-black hover:underline"
                >
                  WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;