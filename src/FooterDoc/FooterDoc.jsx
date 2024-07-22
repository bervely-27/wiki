import React from "react";
import "../styles/FooterDoc/FooterDoc.css";
import FooterDocItem from "./FooterDocItem";
import { GoBug } from "react-icons/go";
import { CiPower } from "react-icons/ci";
const FooterDoc = () => {
  const faq = [
    {
      icon: <CiPower />,
      question: "Tu as un question?",
      link: "Contact le support",
    },
    {
      icon: <GoBug />,
      question: "Tu as decouvert un bug?",
      link: "Contact le support",
    },
    {
      icon: <CiPower />,
      question: "Tu aimes CASHGEN?",
      link: "Laisse un avis",
    },
  ];
  return (
    <div className="footer-doc">
      <hr />
      <div>
        {faq.map((item) => (
          <FooterDocItem
            key={item.question}
            icon={item.icon}
            question={item.question}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterDoc;
