import React from "react";
import "./TrustedBrokerSupport/TrustedBrokerSupport.css";
import { FaPhoneAlt, FaEnvelope, FaComments } from "react-icons/fa";


const supportOptions = [
  {
    icon: <FaPhoneAlt />,
    label: "Call us",
    value: "+248 467 19 76",
    note: "(International charges may apply)"
  },
  {
    icon: <FaEnvelope />,
    label: "Email us",
    value: "support@icmarkets.com"
  },
  {
    icon: <FaComments />,
    label: "Live Chat",
    value: "Chat to support"
  }
];

const TrustedBrokerSupport = () => {
  return (
    
      <div className="mb-5 mt-5">
        
        <div className="support-methods">
          {supportOptions.map((opt, idx) => (
            <div className="support-card" key={idx}>
              <div style={{justifyItems:''}} className="icon green-icon">{opt.icon}</div>
              <div style={{textAlign:'left'}}>
                <div className="type green-text">{opt.label}</div>
                <div className="info">
                  {opt.label === "Email us" ? (
                    <a href={`mailto:${opt.value}`}>{opt.value}</a>
                  ) : opt.label === "Live Chat" ? (
                    <a href="#">{opt.value}</a>
                  ) : (
                    <a href={`tel:${opt.value}`}>{opt.value}</a>
                  )}
                </div>
                {opt.note && <div className="note">{opt.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default TrustedBrokerSupport;
