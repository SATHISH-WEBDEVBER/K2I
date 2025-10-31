import React from "react";
import {
  IconUsersGroup,
  IconBook2,
  IconTools,
  IconBulb,
  IconWorldWww,
} from "@tabler/icons-react";
import { useLanguage } from "../Contexts/LanguageContext.jsx";
import { translations } from "../Contexts/translations.js";
import "../assets/Css/Whyk2i.css";
// import whyk2i from "../assets/Images/whyk2i.gif";

const Whyk2i = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="abt-text">
        <h1
          className={`abt-text-title ${
            language === "ta" ? "abt-text-title-ta" : "abt-text-title-en"
          }`}
        >
          {t.abttitle}
          <span className="k2i">Kowledge2Inteligence ?</span>
        </h1>
        <p
          className={`abt-text-para ${
            language === "ta" ? "abt-text-para-ta" : "abt-text-para-en"
          }`}
        >
          {t.abtpara}
        </p>
      </div>
      <div className="abt-main-container">
        <div className="abt-content">
          <ul className="abt-content-ul">
            <li
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <IconUsersGroup size={28} className="abt-icon" />
              {t.abtc1}
            </li>
            <li
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <IconBook2 size={20} className="abt-icon" />
              {t.abtc2}
            </li>
            <li
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <IconTools size={20} className="abt-icon" />
              {t.abtc3}
            </li>
            <li
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <IconBulb size={20} className="abt-icon" />
              {t.abtc4}
            </li>
            <li
              // data-aos="fade-right"
              // data-aos-offset="300"
              // data-aos-easing="ease-in-sine"
            >
              <IconWorldWww size={20} className="abt-icon" />
              {t.abtc5}
            </li>
          </ul>
        </div>
        <div className="abt-image">
          <img
            // data-aos="fade-left"
            // data-aos-offset="300"
            src="https://k2i.s3.eu-north-1.amazonaws.com/whyk2i.gif"
            loading="lazy"
            alt="img"
          />
        </div>
      </div>
    </>
  );
};

export default Whyk2i;
