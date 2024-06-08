import { useEffect, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import { useTranslation } from "react-i18next";

import "./index.css";
function Settings() {
  const { i18n, t } = useTranslation();
  const [lang, setLang] = useState("tr");

  const handleClick = () => {
    i18n.changeLanguage(lang === "tr" ? "en" : "tr");
    setLang(prv => (prv === "tr" ? "en" : "tr"));
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, []);
  return (
    <>
      <div
        style={{
          position: "relative",
          display: "flex",
          zIndex: "10",
        }}
        className="settings-wrapper"
      >
        <IoMdSettings />
        <div
          style={{
            padding: "1rem 0",
            position: "absolute",
            top: "100%",
            right: "0",
          }}
          className="settings-dropdown"
        >
          <div
            style={{
              background: "#fff",
              width: "max-content",
              borderRadius: "0.5rem",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div
              style={{
                padding: "0.5rem 1rem",
              }}
            >
              {t("changeLang")}
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(0, 0, 0, 0.1)",
              }}
            />
            <div
              style={{
                padding: "1rem",
                fontSize: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div>English</div>

              <div
                style={{
                  borderRadius: "1rem",
                  width: "50px",
                  height: "20px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
                  padding: "0.25rem",
                  display: "flex",
                  justifyContent: lang === "tr" ? "flex-end" : "flex-start",
                }}
                onClick={handleClick}
              >
                <div
                  style={{
                    height: "100%",
                    borderRadius: "100%",
                    aspectRatio: "1/1",
                    background: lang === "tr" ? "#ccc" : "#000",
                  }}
                ></div>
              </div>
              <div>Türkçe</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
