import React from 'react';
import logoImg from '../assets/images/luvia_logo.png';

interface LogoProps {
  className?: string;
}

export function Logo({ className = "w-25 h-25" }: LogoProps) {
  return (
    <div className="flex items-center shrink-0 select-none">
      <img 
        src={logoImg} 
        alt="Luvia Logo" 
        className={`${className} object-contain`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
