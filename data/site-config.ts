export const siteConfig = {
  companyName: "GRAND, správa bytových domov",
  emergency: {
    label: "Havarijná linka 24/7",
    phone: "+421902280147",
    phoneDisplay: "+421 902 280 147",
  },
  features: {
    clientPortalEnabled: false,
    clientPortalUrl: "",
  },
  form: {
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "258eaeea-31fa-4cf4-8dd3-d480ec0162e5",
    subject: "Kontakt — GRAND správa bytových domov",
  },
} as const;
