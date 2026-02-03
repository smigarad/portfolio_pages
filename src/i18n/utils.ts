import { translations, type Language } from "./translations";

const STORAGE_KEY = "lang";
const DEFAULT_LANG: Language = "cs";

/**
 * Get the current language from localStorage or detect from browser
 */
export function getLang(): Language {
  // Check localStorage first
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "cs" || stored === "en") {
      return stored;
    }
  }

  // Detect from browser language
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("cs")) {
      return "cs";
    }
    // Default to English for non-Czech browsers
    return "en";
  }

  return DEFAULT_LANG;
}

/**
 * Set the language and save to localStorage
 */
export function setLang(lang: Language): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, lang);
  }

  // Update html lang attribute
  if (typeof document !== "undefined") {
    document.documentElement.lang = lang;
  }
}

/**
 * Get translation for a given key path
 * @param key - Dot-separated path to translation (e.g., "nav.about")
 * @param lang - Optional language override
 */
export function t(key: string, lang?: Language): string {
  const currentLang = lang || getLang();
  const keys = key.split(".");

  let result: unknown = translations[currentLang];
  for (const k of keys) {
    if (result && typeof result === "object" && k in result) {
      result = (result as Record<string, unknown>)[k];
    } else {
      // Fallback to Czech if key not found
      result = translations.cs;
      for (const fallbackKey of keys) {
        if (result && typeof result === "object" && fallbackKey in result) {
          result = (result as Record<string, unknown>)[fallbackKey];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }

  return typeof result === "string" ? result : key;
}

/**
 * Get all translations for a given language
 */
export function getTranslations(lang?: Language) {
  return translations[lang || getLang()];
}

/**
 * Check if a language is valid
 */
export function isValidLang(lang: string): lang is Language {
  return lang === "cs" || lang === "en";
}
