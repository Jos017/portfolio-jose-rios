import React, { useState } from 'react';

const HamButton = ({ color = 'primary' }: { color?: 'primary' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const btnColors = {
    primary: 'bg-primary-main',
  };
  const hamLine = `${btnColors[color]} h-1 w-7 my-1 rounded-full transition ease transform duration-300`;
  const lineRotated = `rotate-45 translate-y-3 opacity-50 group-hover:opacity-100`;
  const lineReversed = `-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100`;
  const lineHover = 'opacity-50 group-hover:opacity-100';

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group"
      onClick={handleClick}
    >
      <div className={`${hamLine} ${isOpen ? lineRotated : lineHover}`} />
      <div className={`${hamLine} ${isOpen ? 'opacity-0' : lineHover}`} />
      <div className={`${hamLine} ${isOpen ? lineReversed : lineHover}`} />
    </button>
  );
};

export default HamButton;
