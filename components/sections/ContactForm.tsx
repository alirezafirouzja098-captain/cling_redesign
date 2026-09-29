"use client";

import { useState, useId } from "react";
import { Button } from "@/components/ui/Button";

type FieldErrors = Partial<Record<string, string>>;

const PROJECT_TYPES = [
  "Web Development",
  "App Development",
  "ERP Solutions",
  "AI/ML Engineering",
  "3D Animation",
  "Digital Marketing",
  "Other",
];

export function ContactForm() {
  const uid = useId();
  const fieldId = (name: string) => `${uid}-${name}`;
  const errId = (name: string) => `${uid}-${name}-err`;

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function validate(): FieldErrors {
    const errs: FieldErrors = {};
    if (!values.fullName.trim()) errs.fullName = "Full name is required.";
    if (!values.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!values.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      document.getElementById(fieldId(firstKey))?.focus();
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center gap-5 rounded-md bg-[#FAF6EF] border border-[#D8CBB9] p-10 text-center"
      >
        <div className="w-14 h-14 rounded-md bg-[#641C2D] text-[#F4EBDD] flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 16.5l5.5 5.5 10.5-11"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-[#171514]">
          Inquiry Received
        </h3>
        <p className="text-[#665B57] max-w-sm text-sm leading-relaxed">
          Thank you for reaching out. A senior partner will review your requirements and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setValues({
              fullName: "",
              email: "",
              phone: "",
              company: "",
              projectType: "",
              message: "",
            });
            setErrors({});
          }}
          className="mt-2 text-xs font-bold uppercase tracking-wider text-[#641C2D] hover:text-[#8A263D] underline underline-offset-4 cursor-pointer"
        >
          Submit another inquiry &rarr;
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-md border bg-[#FAF6EF] px-4 py-3 text-[#171514] text-sm placeholder:text-[#8F827B] outline-none transition-colors focus:border-[#641C2D] focus:ring-1 focus:ring-[#641C2D]";
  const inputNormal = "border-[#D8CBB9]";
  const inputError = "border-[#991B1B] focus:ring-[#991B1B] focus:border-[#991B1B]";

  function fieldClass(name: string) {
    return `${inputBase} ${errors[name] ? inputError : inputNormal}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="flex flex-col gap-5"
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor={fieldId("fullName")}
          className="block text-xs font-bold uppercase tracking-wider text-[#171514] mb-1.5"
        >
          Full Name <span aria-hidden="true" className="text-[#641C2D]">*</span>
        </label>
        <input
          id={fieldId("fullName")}
          name="fullName"
          type="text"
          autoComplete="name"
          required
          value={values.fullName}
          onChange={handleChange}
          className={fieldClass("fullName")}
          placeholder="Jane Smith"
          aria-required="true"
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? errId("fullName") : undefined}
        />
        {errors.fullName && (
          <p
            id={errId("fullName")}
            role="alert"
            className="mt-1.5 text-xs text-[#991B1B]"
          >
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor={fieldId("email")}
          className="block text-xs font-bold uppercase tracking-wider text-[#171514] mb-1.5"
        >
          Email Address <span aria-hidden="true" className="text-[#641C2D]">*</span>
        </label>
        <input
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          required
          value={values.email}
          onChange={handleChange}
          className={fieldClass("email")}
          placeholder="jane@example.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? errId("email") : undefined}
        />
        {errors.email && (
          <p
            id={errId("email")}
            role="alert"
            className="mt-1.5 text-xs text-[#991B1B]"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone + Company row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor={fieldId("phone")}
            className="block text-xs font-bold uppercase tracking-wider text-[#171514] mb-1.5"
          >
            Phone{" "}
            <span className="text-[#8F827B] font-normal normal-case">(optional)</span>
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={handleChange}
            className={fieldClass("phone")}
            placeholder="+91 98765 43210"
          />
        </div>
        <div>
          <label
            htmlFor={fieldId("company")}
            className="block text-xs font-bold uppercase tracking-wider text-[#171514] mb-1.5"
          >
            Company{" "}
            <span className="text-[#8F827B] font-normal normal-case">(optional)</span>
          </label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange}
            className={fieldClass("company")}
            placeholder="Organization name"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor={fieldId("projectType")}
          className="block text-xs font-bold uppercase tracking-wider text-[#171514] mb-1.5"
        >
          Project Focus{" "}
          <span className="text-[#8F827B] font-normal normal-case">(optional)</span>
        </label>
        <select
          id={fieldId("projectType")}
          name="projectType"
          value={values.projectType}
          onChange={handleChange}
          className={`${fieldClass("projectType")} cursor-pointer`}
        >
          <option value="">Select an engineering domain…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor={fieldId("message")}
          className="block text-xs font-bold uppercase tracking-wider text-[#171514] mb-1.5"
        >
          Project Details <span aria-hidden="true" className="text-[#641C2D]">*</span>
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange}
          className={`${fieldClass("message")} resize-none`}
          placeholder="Briefly describe your goals, timeline, and expectations…"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? errId("message") : undefined}
        />
        {errors.message && (
          <p
            id={errId("message")}
            role="alert"
            className="mt-1.5 text-xs text-[#991B1B]"
          >
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={loading}
        className="w-full mt-2"
      >
        {loading ? "Submitting Inquiry…" : "Submit Project Inquiry"}
      </Button>

      <p className="text-xs text-center text-[#8F827B]">
        <span aria-hidden="true">*</span> Mandatory fields. All communication is held under strict NDA.
      </p>
    </form>
  );
}
