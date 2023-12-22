import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';

export default function Header() {
  return (
    <div
      className="h-12 w-ful
      flex justify-end items-center px-4"
    >
      <ThemeToggleButton />
    </div>
  );
}
