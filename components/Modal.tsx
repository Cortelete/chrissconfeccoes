import React, { ReactNode } from 'react';
import { XIcon } from './icons';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-gradient-to-br from-gray-900 to-black/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/40 w-full max-w-md m-4 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {children}
        </div>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
          aria-label="Fechar modal"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};
