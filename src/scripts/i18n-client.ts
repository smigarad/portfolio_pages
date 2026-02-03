// Client-side i18n handler
import { translations, type Language } from "../i18n/translations";

function getNestedValue(obj: unknown, path: string): string | undefined {
  const keys = path.split(".");
  let result = obj;
  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return typeof result === "string" ? result : undefined;
}

function updateTranslations(lang: Language) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) {
      const translation = getNestedValue(translations[lang], key);
      if (translation) {
        el.textContent = translation;
      }
    }
  });

  // Update placeholder attributes
  const placeholderElements = document.querySelectorAll("[data-i18n-placeholder]");
  placeholderElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) {
      const translation = getNestedValue(translations[lang], key);
      if (translation) {
        el.setAttribute("placeholder", translation);
      }
    }
  });

  // Update aria-label attributes
  const ariaElements = document.querySelectorAll("[data-i18n-aria]");
  ariaElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key) {
      const translation = getNestedValue(translations[lang], key);
      if (translation) {
        el.setAttribute("aria-label", translation);
      }
    }
  });

  // Update alt attributes
  const altElements = document.querySelectorAll("[data-i18n-alt]");
  altElements.forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    if (key) {
      const translation = getNestedValue(translations[lang], key);
      if (translation) {
        el.setAttribute("alt", translation);
      }
    }
  });
}

function initI18n() {
  // Get current language
  const lang = (document.documentElement.lang || "cs") as Language;

  // Initial update
  updateTranslations(lang);

  // Listen for language changes
  window.addEventListener("langchange", (e) => {
    const customEvent = e as CustomEvent<{ lang: Language }>;
    updateTranslations(customEvent.detail.lang);
  });
}

// Run on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initI18n);
} else {
  initI18n();
}

// Re-run on Astro navigation
document.addEventListener("astro:after-swap", initI18n);
