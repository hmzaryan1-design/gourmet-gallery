import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const languages: { code: Language; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "ع" },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 font-body text-xs tracking-[0.1em]">
      {languages.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          <button
            onClick={() => setLanguage(lang.code)}
            className={`transition-colors ${
              language === lang.code
                ? "text-accent"
                : "text-primary-foreground/60 hover:text-primary-foreground"
            }`}
          >
            {lang.label}
          </button>
          {i < languages.length - 1 && (
            <span className="text-primary-foreground/30">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
