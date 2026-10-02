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
    "w-full border-0 border-b border-grand-gray/30 bg-transparent px-0 py-3.5 text-base text-grand-gray-dark placeholder:text-grand-gray/45 focus:border-grand-orange focus:outline-none transition-[border-color] duration-300";

  const labelClass =
    "mb-2.5 block text-[10px] font-medium uppercase tracking-[0.25em] text-grand-gray transition-colors duration-300 group-focus-within:text-grand-orange";

  if (status === "success") {
    return (
      <div role="status" className="border-l-2 border-grand-orange py-3 pl-6">
        <p className="text-base leading-loose text-grand-gray-dark">
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
      className="space-y-9"
      noValidate
    >
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value={subject} />

      <div className="group">
        <label htmlFor="name" className={labelClass}>
          Meno *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className={cn(inputClass)}
          autoComplete="name"
        />
      </div>

      <div className="group">
        <label htmlFor="email" className={labelClass}>
          E-mail *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={cn(inputClass)}
          autoComplete="email"
        />
      </div>

      <div className="group">
        <label htmlFor="message" className={labelClass}>
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
        className="mt-4 border border-grand-gray-dark px-12 py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-grand-gray-dark transition-all duration-300 hover:border-grand-orange hover:bg-grand-orange hover:text-white disabled:opacity-50"
      >
        {status === "submitting" ? "Odosielam…" : "Odoslať"}
      </button>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-600/80">
          Odoslanie zlyhalo. Skúste to znova alebo nás kontaktujte telefonicky.
        </p>
      )}
    </form>
  );
}
