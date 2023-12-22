import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ThemeToggleButton() {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setIsToggled((toggled) => !toggled);
  }, []);

  return (
    <button
      onClick={ toggle }
      type="button"
      aria-label="Toggle theme"

    >
      <span
        className={ `${isToggled ? 'translate-x-6' : 'translate-x-0'} 
        inline-block w-6 h-6 transform bg-white rounded-full transition-transform` }
      />
      <FontAwesomeIcon
        icon={ isToggled ? faSun : faMoon }
        size="2x"
        className="text-lg absolute"
      />
    </button>
  );
}

export default ThemeToggleButton;
