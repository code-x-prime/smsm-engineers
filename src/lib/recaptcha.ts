declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

/**
 * Executes an invisible Google reCAPTCHA v3 challenge and returns the token,
 * or null if reCAPTCHA isn't configured/loaded (site key missing, script not
 * yet ready). Callers should treat a null token as "skip verification" —
 * the server route decides whether that's acceptable based on whether it
 * has a secret key configured.
 */
export async function getRecaptchaToken(action: string): Promise<string | null> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey || typeof window === "undefined" || !window.grecaptcha) {
    return null;
  }

  return new Promise((resolve) => {
    window.grecaptcha!.ready(async () => {
      try {
        const token = await window.grecaptcha!.execute(siteKey, { action });
        resolve(token);
      } catch {
        resolve(null);
      }
    });
  });
}
