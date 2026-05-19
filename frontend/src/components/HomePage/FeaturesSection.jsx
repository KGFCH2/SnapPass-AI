import React from "react";

const FeaturesSection = ({ features, iconMap }) => {
  return (
    <section className="features-section" aria-labelledby="features-title">
      <h2 id="features-title" className="text-center section-title">
        Features
      </h2>
      <p className="text-center section-subtitle">
        Everything you need right out of the box
      </p>
      <div className="features-grid">
        {features.map(({ icon, title, desc, image, tag }) => (
          <div key={title} className="feature-card card">
            <div className="feature-card__preview">
              <img
                src={image}
                alt={title}
                className="feature-card__image"
                loading="lazy"
              />

              <span className="feature-card__tag">{tag}</span>
            </div>

            <span className="feature-card__icon" aria-hidden="true">
              {iconMap[icon]}
            </span>

            <h3 className="feature-card__title">{title}</h3>

            <p className="feature-card__desc">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
