import React from "react";

const AIShowcaseSection = ({ chips, iconMap }) => {
  return (
    <section className="ai-showcase" aria-labelledby="ai-showcase-title">
      {/* left  text */}
      <div className="ai-showcase__content">
        <span className="badge badge-blue">AI Powered Workflow</span>

        <h2 id="ai-showcase-title" className="section-title">
          From Simple Upload
          <br />
          to Print-Ready Sheet
        </h2>

        <p className="section-subtitle">
          Upload a portrait photo and let AI automatically remove the
          background, align your face and generate a professional passport photo
          sheet.
        </p>

        {/* feature */}
        <div className="ai-showcase__chips">
          {chips.map(({ icon, label }) => (
            <div key={label} className="ai-chip">
              <span className="ai-chip__icon" aria-hidden="true">
                {iconMap[icon]}
              </span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* images */}
      <div className="ai-showcase__visual">
        {/* original */}
        <div className="showcase-photo-card">
          <img
            src="/before.png"
            alt="Uploaded portrait"
            className="showcase-photo-card__image"
          />
        </div>

        {/* print sheet */}
        <div className="showcase-sheet-card">
          <img
            src="/after.png"
            alt="Printable passport sheet"
            className="showcase-sheet-card__image"
          />

          <div className="showcase-sheet-card__badge">Print Ready</div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcaseSection;
