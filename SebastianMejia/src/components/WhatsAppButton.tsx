import React from 'react';
import './WhatsAppButton.css';

interface WhatsAppButtonProps {
  number?: string; // WhatsApp number as a prop
  message?: string; // Optional pre-filled message
}

const DEFAULT_NUMBER = '+34697731061'; // Default WhatsApp number

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ number = DEFAULT_NUMBER, message }) => {
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
  const whatsappLink = `https://wa.me/${number}${encodedMessage}`;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      title="Chat on WhatsApp"
      aria-label="Open WhatsApp chat"
    >
      <svg viewBox="0 0 32 32">
        <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.32C13.1 27.13 14.52 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.33 0-2.62-.26-3.81-.76l-.27-.11-4.27 1.38 1.4-4.14-.18-.29C7.13 18.01 6.5 16.54 6.5 15c0-5.24 4.26-9.5 9.5-9.5s9.5 4.26 9.5 9.5-4.26 9.5-9.5 9.5zm5.13-7.37c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.22.69.24 1.23.38 1.65.49.69.18 1.32.15 1.82.09.56-.07 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
