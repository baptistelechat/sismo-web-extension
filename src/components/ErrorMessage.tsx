import React from 'react';

interface ErrorMessageProps {
  message: string;
}

/**
 * Composant pour afficher un message d'erreur
 * @param message Le message d'erreur à afficher
 */
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="wDYxhc">
      <div className="Z1hOCe">
        <div className="zloOqf PZPZlf">
          <div className="rVusze">
            <span style={{ color: 'red' }}>{message}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;