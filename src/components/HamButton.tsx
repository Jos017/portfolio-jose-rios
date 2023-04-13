import React, { useState } from 'react';

type BtnColors = 'primary';

const HamButton = ({
  color = 'primary',
  onClick,
}: {
  color?: BtnColors;
  onClick?: Function;
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const btnColors = {
    primary: 'bg-primary-main',
  };
  const hamLine = `${btnColors[color]} h-1 w-7 my-1 rounded-full transition ease transform duration-300`;
  const lineRotated = `rotate-45 translate-y-3 opacity-50 group-hover:opacity-100`;
  const lineReversed = `-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100`;
  const lineHover = 'opacity-50 group-hover:opacity-100';

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className="flex flex-col items-center justify-center w-12 h-12 group"
      onClick={handleClick}
    >
      <div className={`${hamLine} ${isClicked ? lineRotated : lineHover}`} />
      <div className={`${hamLine} ${isClicked ? 'opacity-0' : lineHover}`} />
      <div className={`${hamLine} ${isClicked ? lineReversed : lineHover}`} />
    </button>
  );
};

export default HamButton;
