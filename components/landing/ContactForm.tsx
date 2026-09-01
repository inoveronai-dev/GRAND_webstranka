"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const { endpoint, accessKey, subject } = siteConfig.form;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.message ?? "Submit failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-grand-gray-dark placeholder:text-grand-gray/60 focus:border-grand-orange focus:outline-none focus:ring-2 focus:ring-grand-orange/30";

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-sm border border-grand-gray/20 bg-white p-8"
      >
        <p className="text-lg font-light text-grand-gray-dark">
          Vaša správa bola odoslaná. Ozveme sa vám čo najskôr.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action={endpoint}
      method="POST"
      className="space-y-6"
      noValidate
    >
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value={subject} />

      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-xs font-medium uppercase tracking-widest text-grand-gray"
        >
          Meno *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={inputClass}
          autoComplete="name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-xs font-medium uppercase tracking-widest text-grand-gray"
        >
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          autoComplete="email"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-xs font-medium uppercase tracking-widest text-grand-gray"
        >
          Odkaz *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 w-full rounded-lg bg-grand-orange px-10 py-4 text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-grand-orange-hover hover:shadow-lg disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Odosielam…" : "Odoslať"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600">
          Odoslanie zlyhalo. Skúste to znova alebo nás kontaktujte telefonicky.
        </p>
      )}
    </form>
  );
}
