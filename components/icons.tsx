
import React from 'react';

const iconProps = {
  className: "w-6 h-6",
  strokeWidth: "1.5",
};

export const InstagramIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const MapPinIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const InfoIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export const StarIcon: React.FC = () => (
  <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export const WhatsAppIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export const ClockIcon: React.FC = () => (
    <svg {...iconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

export const XIcon: React.FC = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

// New Icons
export const DiamondIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || iconProps.className} strokeWidth={iconProps.strokeWidth} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M6 3h12l4 6-10 13L2 9z"></path>
        <path d="M11 3v6h-5"></path>
        <path d="M13 3v6h5"></path>
    </svg>
);

export const UsersIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || iconProps.className} strokeWidth={iconProps.strokeWidth} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

export const ScissorsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || iconProps.className} strokeWidth={iconProps.strokeWidth} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="6" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
        <line x1="14.47" y1="14.48" x2="20" y2="20"></line>
        <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
    </svg>
);

export const TruckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className || iconProps.className} strokeWidth={iconProps.strokeWidth} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
    </svg>
);
