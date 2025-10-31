import React from "react";
import {
  IconPlayerPlay,
  IconFileCode,
  IconCpu,
  IconBrandGithub,
} from "@tabler/icons-react";
import "../assets/Css/Whatweoffer.css";

import { useLanguage } from "../Contexts/LanguageContext.jsx";
import { translations } from "../Contexts/translations.js";

const WhatWeOffer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const features = [
    {
      icon: <IconPlayerPlay size={28} />,
      text: t.wwoc1,
    },
    {
      icon: <IconFileCode size={28} />,
      text: t.wwoc2,
    },
    {
      icon: <IconCpu size={28} />,
      text: t.wwoc3,
    },
    {
      icon: <IconBrandGithub size={28} />,
      text: t.wwoc4,
    },
  ];

  return (
    <>
      <div className="offer-container">
        <div className="offer-title-container">
          <h2
            className={`offer-title ${
              language === "ta" ? "offer-title-ta" : ""
            }`}
          >
            <span>{t.wwotitle}</span>
          </h2>
          <p className={`card-text ${
            language === "ta" ? "card-text-ta" : ""
            }`}>
            {t.wwopara}
          </p>
        </div>
        <div className="whatweoffer-container">
          {features.map((feature) => ( //add index
            <div
              className="offer-card"
              // key={index}
              // data-aos="zoom-in"
              // data-aos-offset="300"
            >
              <div className="icon-container">
                <div className="icon-circle">{feature.icon}</div>
              </div>
              <p className="card-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
