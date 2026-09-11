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
    "w-full border-0 border-b border-grand-gray/25 bg-transparent px-0 py-4 text-grand-gray-dark placeholder:text-grand-gray/50 focus:border-grand-orange focus:outline-none transition-colors duration-300";

  if (status === "success") {
    return (
      <div role="status" className="border-l border-grand-orange py-2 pl-6">
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
      className="space-y-8"
      noValidate
    >
      <input type="hidden" name="access_key" value={accessKey} />
      <input type="hidden" name="subject" value={subject} />

      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-grand-gray"
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
          className="mb-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-grand-gray"
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
          className="mb-2 block text-[10px] font-medium uppercase tracking-[0.25em] text-grand-gray"
        >
          Odkaz *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 border border-grand-gray-dark px-10 py-3.5 text-[10px] font-medium uppercase tracking-[0.3em] text-grand-gray-dark transition-all duration-300 hover:border-grand-orange hover:text-grand-orange disabled:opacity-50"
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
