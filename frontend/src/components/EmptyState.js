import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EmptyState.css';

function EmptyState({
  title,
  description,
  buttonText = 'Upload Photo',
  redirectTo = '/upload',
}) {
  const navigate = useNavigate();

  return (
    <div className="empty-state">
      <div className="empty-state__illustration">🖼️</div>

      <h2 className="empty-state__title">{title}</h2>

      <p className="empty-state__description">
        {description}
      </p>

      <button
        className="btn btn-primary empty-state__button"
        onClick={() => navigate(redirectTo)}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default EmptyState;