
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
      className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-end md:items-center justify-center z-50 p-0 md:p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative bg-white border-t md:border border-black/10 rounded-t-2xl md:rounded-2xl shadow-2xl shadow-black/20 w-full max-w-md m-0 md:m-4 animate-slide-up max-h-[85dvh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          {children}
        </div>
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition-colors duration-200 p-1"
          aria-label="Fechar modal"
        >
          <XIcon />
        </button>
      </div>
    </div>
  );
};
