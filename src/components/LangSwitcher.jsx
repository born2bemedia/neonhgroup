import ArrowDown from "@/icons/other/ArrowDown";
import Script from "next/script";
import { useState } from "react";

const LangSwitcher = () => {
  const [currentLang, setCurrentLang] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLanguageChange = (language, languageCode) => {
    const retryDispatchEvent = (attempts = 10) => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = language;
        const changeEvent = new Event("change", {
          bubbles: true,
          cancelable: true,
        });
        select.dispatchEvent(changeEvent);

        if (document.documentElement.lang === language || attempts <= 1) {
          setCurrentLang(languageCode);
          setIsDropdownOpen(false);
          return;
        }
      }

      if (attempts > 1) {
        setTimeout(() => retryDispatchEvent(attempts - 1), 100);
      }
    };

    retryDispatchEvent();
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        style={{
          padding: "0",
          backgroundColor: "#F2F1F6",
          color: "#fff",
          border: "none",
          borderRadius: "0",
          cursor: "pointer",
          padding: "14px 12px",
          gap: "8px",
          display: "flex",
          alignItems: "center",

        }}
      >
        <img src={`/images/${currentLang}.svg`} style={{ width: "24px", height: "24px", objectFit: "contain" }} />
        <span style={{ color: "#020513", fontSize: "16px", lineHeight: "16px" }}>{currentLang}</span>
        <ArrowDown />
      </button>

      {isDropdownOpen && (
        <ul
          translate="no"
          style={{
            position: "absolute",
            top: "60px",
            left: "0px",
            backgroundColor: "#fff",
            listStyle: "none",
            padding: "0px",
            margin: 0,
            border: "1px solid #ECECEE",
            borderRadius: "0px",
            width: "110px",
            zIndex: "999",
          }}
        >
          <li
            onClick={() => handleLanguageChange("en", "EN")}
            style={{
              padding: "12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#020513",
              fontSize: "16px",
            }}
          >
            <img src="/images/EN.svg" />
            EN
          </li>
          <li
            onClick={() => handleLanguageChange("de", "DE")}
            style={{
              padding: "12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#020513",
              fontSize: "16px",
            }}
          >
            <img src="/images/DE.svg" />
            DE
          </li>
          <li
            onClick={() => handleLanguageChange("it", "IT")}
            style={{
              padding: "12px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#020513",
              fontSize: "16px",
            }}
          >
            <img src="/images/IT.svg" />
            IT
          </li>
        </ul>
      )}

      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        onLoad={() => {
          const googleTranslateElementInit = () => {
            new window.google.translate.TranslateElement(
              { pageLanguage: "en" },
              "google_translate_element"
            );
          };
          window.googleTranslateElementInit = googleTranslateElementInit;
        }}
      />
      <div id="google_translate_element" style={{ display: "none" }}></div>
    </div>
  );
};

export default LangSwitcher;
