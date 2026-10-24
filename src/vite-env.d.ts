/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional form service URL (e.g. Formspree). Without it the contact form opens an email draft. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}
