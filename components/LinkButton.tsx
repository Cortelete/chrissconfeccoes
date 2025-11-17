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
      className="group w-full bg-transparent border border-gray-900/10 rounded-xl px-4 py-3 md:py-4 flex items-center justify-start text-gray-800 hover:bg-gray-900/5 hover:border-gray-900/20 hover:shadow-lg hover:shadow-black/5 hover:scale-[1.03] transition-all duration-300 ease-in-out"
    >
      <div className="w-8 flex-shrink-0 text-gray-500 group-hover:text-black transition-colors duration-300">
        {icon}
      </div>
      <span className="flex-grow text-center text-sm md:text-base font-semibold tracking-wider">
        {text}
      </span>
    </button>
  );
};

export default LinkButton;