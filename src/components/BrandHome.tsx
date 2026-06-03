import React from "react";

interface BrandHomeProps {
  onNavigateToProduct: () => void;
  onNavigateToAbout: () => void;
}

export function BrandHome({ onNavigateToProduct, onNavigateToAbout }: BrandHomeProps) {
  // All general contents have been removed as requested.
  return <div className="pt-24 bg-[var(--color-bg-dark)] min-h-screen" />;
}
