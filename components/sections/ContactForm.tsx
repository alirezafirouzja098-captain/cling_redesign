"use client";

import { useState, useId } from "react";
import { Button } from "@/components/ui/Button";

type FieldErrors = Partial<Record<string, string>>;

const PROJECT_TYPES = [
  "Web Development",
  "App Development",
  "ERP",
  "AI/ML",
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
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      // Focus first error field
      const firstKey = Object.keys(errs)[0];
      document.getElementById(fieldId(firstKey))?.focus();
      return;
    }
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center gap-6 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-12 text-center"
      >
        {/* Checkmark icon */}
        <div className="w-16 h-16 rounded-full bg-[#4F46E5] flex items-center justify-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 16.5l5.5 5.5 10.5-11"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display text-2xl font-bold text-[#0F172A]">
          Message received!
        </h3>
        <p className="text-[#475569] max-w-sm leading-relaxed">
          Thank you for reaching out. The Cling team will get back to you within
          one business day.
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
          className="mt-2 text-sm font-medium text-[#4F46E5] hover:text-[#4338CA] underline underline-offset-4 cursor-pointer"
        >
          Send another inquiry &rarr;
        </button>
      </div>
    );
  }

  const inputBase =
    "w-full rounded-lg border bg-white px-4 py-3 text-[#0F172A] text-sm placeholder:text-[#94A3B8] outline-none transition-colors focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]";
  const inputNormal = "border-[#E2E8F0]";
  const inputError = "border-red-400 focus:ring-red-400 focus:border-red-400";

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
          className="block text-sm font-medium text-[#0F172A] mb-1.5"
        >
          Full Name <span aria-hidden="true" className="text-red-500">*</span>
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
            className="mt-1.5 text-xs text-red-600"
          >
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor={fieldId("email")}
          className="block text-sm font-medium text-[#0F172A] mb-1.5"
        >
          Email Address <span aria-hidden="true" className="text-red-500">*</span>
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
            className="mt-1.5 text-xs text-red-600"
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
            className="block text-sm font-medium text-[#0F172A] mb-1.5"
          >
            Phone{" "}
            <span className="text-[#94A3B8] font-normal">(optional)</span>
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
            className="block text-sm font-medium text-[#0F172A] mb-1.5"
          >
            Company{" "}
            <span className="text-[#94A3B8] font-normal">(optional)</span>
          </label>
          <input
            id={fieldId("company")}
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange}
            className={fieldClass("company")}
            placeholder="Acme Corp"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label
          htmlFor={fieldId("projectType")}
          className="block text-sm font-medium text-[#0F172A] mb-1.5"
        >
          Project Type{" "}
          <span className="text-[#94A3B8] font-normal">(optional)</span>
        </label>
        <select
          id={fieldId("projectType")}
          name="projectType"
          value={values.projectType}
          onChange={handleChange}
          className={`${fieldClass("projectType")} cursor-pointer`}
        >
          <option value="">Select a service…</option>
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
          className="block text-sm font-medium text-[#0F172A] mb-1.5"
        >
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={handleChange}
          className={`${fieldClass("message")} resize-none`}
          placeholder="Tell us about your project…"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? errId("message") : undefined}
        />
        {errors.message && (
          <p
            id={errId("message")}
            role="alert"
            className="mt-1.5 text-xs text-red-600"
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
        className="w-full mt-1"
      >
        {loading ? "Sending…" : "Send Message"}
      </Button>

      <p className="text-xs text-center text-[#94A3B8]">
        <span aria-hidden="true">*</span> Required fields. We never share your
        data.
      </p>
    </form>
  );
}
