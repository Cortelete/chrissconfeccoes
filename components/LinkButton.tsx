import React, { ReactNode } from 'react';

interface LinkButtonProps {
  icon: ReactNode;
  text: string;
  onClick: () => void;
}

const LinkButton: React.FC<LinkButtonProps> = ({ icon, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group w-full bg-white border border-gray-200 rounded-xl px-4 py-3 md:py-4 flex items-center justify-between text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm hover:scale-[1.02] transition-all duration-300 ease-in-out"
    >
      <div className="w-8 flex-shrink-0 flex items-center justify-center text-gray-600 group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <span className="flex-grow text-center text-sm md:text-base font-semibold tracking-wider">
        {text}
      </span>
      {/* Spacer to balance the icon width and ensure perfect centering */}
      <div className="w-8 flex-shrink-0" />
    </button>
  );
};

export default LinkButton;