"use client";

import { useCallback, useEffect, useState } from "react";
import { X } from "lucide-react";

export function ChangeManagerModal() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-10 inline-flex items-center rounded-lg bg-grand-orange px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-grand-orange-hover hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grand-orange"
      >
        Ako zmeniť správcu? Pre presný postup kliknite sem.
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="change-manager-heading"
          onClick={close}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-md p-2 text-grand-gray transition-colors hover:bg-grand-gray-light hover:text-grand-gray-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-grand-orange"
              aria-label="Zavrieť"
            >
              <X className="h-5 w-5" />
            </button>

            <h3
              id="change-manager-heading"
              className="mb-6 pr-10 text-2xl font-bold text-grand-gray-dark"
            >
              Ako zmeniť správcu
            </h3>

            <div className="space-y-4 text-base leading-relaxed text-grand-gray">
              <p>
                V prípade, že sa rozhodnete zmeniť správcu, rozhodne Vám odporúčame,
                aby ste nás kontaktovali. Pri mnohých formálnych náležitostiach zmeny
                správcu by ste mohli urobiť chybu. Postup pri zmene správcu upravuje
                zákon č. 182/1993 Z.z. o vlastníctve bytov a nebytových priestoroch v
                znení neskorších predpisov.
              </p>
              <p>
                O zmene správcu sa rozhoduje na schôdzi vlastníkov. Schôdzu by mal na
                požiadanie štvrtiny všetkých vlastníkov zvolať správca, ak tak neurobí
                do 15 dní, môže si ju štvrtina vlastníkov zvolať sama. Pri zvolávaní
                schôdze by Vám mal pomôcť aj zástupca vlastníkov (domový dôverník),
                tento post však nebýva obsadený v každom bytovom dome.
              </p>
              <p>
                Ku zmene správcu dôjde, ak ju na schôdzi schváli nadpolovičná väčšina
                všetkých vlastníkov bytov a nebytových priestorov v dome. V prípade, že
                je vo Vašom dome náročné dosiahnutie nadpolovičnej väčšiny vlastníkov
                na schôdzi, je možné hlasovať písomne. V prípade, že je zmena správcu
                schválená, my už dohliadneme na to, aby celý ďalší postup pri
                odovzdávaní agendy od predchádzajúceho správcu novému správcovi prebehol
                tak, ako má.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
