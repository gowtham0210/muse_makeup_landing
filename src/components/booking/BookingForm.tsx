"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES } from "@/lib/site-config";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REQUIRED_FIELDS: { key: keyof FormValues; label: string }[] = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "phone", label: "Phone" },
  { key: "service", label: "Service" },
  { key: "date", label: "Preferred date" },
  { key: "time", label: "Preferred time" },
];

export function BookingForm() {
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    phone: "",
    service: preselectedService,
    date: "",
    time: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    for (const field of REQUIRED_FIELDS) {
      if (!values[field.key].trim()) {
        nextErrors[field.key] = `${field.label} is required.`;
      }
    }

    if (values.email && !EMAIL_PATTERN.test(values.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="border border-champagne/30 bg-ink-soft px-8 py-10 text-center"
      >
        <h2 className="font-serif text-2xl text-cream">
          Thank You, {values.name}.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-cream/70">
          Your enquiry has been recorded . We Will Contact You Shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          label="Name"
          error={errors.name}
          htmlFor="booking-name"
        >
          <input
            id="booking-name"
            type="text"
            value={values.name}
            onChange={(event) => updateField("name", event.target.value)}
            aria-invalid={!!errors.name}
            className={inputClasses(!!errors.name)}
          />
        </Field>

        <Field label="Email" error={errors.email} htmlFor="booking-email">
          <input
            id="booking-email"
            type="email"
            value={values.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={!!errors.email}
            className={inputClasses(!!errors.email)}
          />
        </Field>

        <Field label="Phone" error={errors.phone} htmlFor="booking-phone">
          <input
            id="booking-phone"
            type="tel"
            value={values.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            aria-invalid={!!errors.phone}
            className={inputClasses(!!errors.phone)}
          />
        </Field>

        <Field label="Service" error={errors.service} htmlFor="booking-service">
          <select
            id="booking-service"
            value={values.service}
            onChange={(event) => updateField("service", event.target.value)}
            aria-invalid={!!errors.service}
            className={inputClasses(!!errors.service)}
          >
            <option value="">Select a service</option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Preferred Date" error={errors.date} htmlFor="booking-date">
          <input
            id="booking-date"
            type="date"
            value={values.date}
            onChange={(event) => updateField("date", event.target.value)}
            aria-invalid={!!errors.date}
            className={inputClasses(!!errors.date)}
          />
        </Field>

        <Field label="Preferred Time" error={errors.time} htmlFor="booking-time">
          <input
            id="booking-time"
            type="time"
            value={values.time}
            onChange={(event) => updateField("time", event.target.value)}
            aria-invalid={!!errors.time}
            className={inputClasses(!!errors.time)}
          />
        </Field>
      </div>

      <Field label="Additional Message" htmlFor="booking-message">
        <textarea
          id="booking-message"
          rows={4}
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={inputClasses(false)}
        />
      </Field>

      <p className="text-xs leading-relaxed text-cream/50">
        This is a demo enquiry form. Submitting it will not send a real
        booking request until it is connected to an email or booking API.
      </p>

      <button
        type="submit"
        className="rounded-full bg-champagne px-8 py-3 text-sm uppercase tracking-[0.15em] text-ink transition-colors duration-200 hover:bg-champagne-light"
      >
        Send Enquiry
      </button>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return `w-full border bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-1 ${
    hasError
      ? "border-burgundy focus:ring-burgundy"
      : "border-champagne/30 focus:ring-champagne"
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-xs uppercase tracking-[0.15em] text-cream/70"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-burgundy-light" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
