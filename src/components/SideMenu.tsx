import React from 'react';
import { TNavItems } from '../common/const';

type TPosition = 'right' | 'left';

type TSideMenuProps = {
  items: TNavItems[];
  position?: TPosition;
};

const borderRadiusVariants: { [key in TPosition]: string } = {
  right: 'rounded-e-lg',
  left: 'rounded-s-lg',
};
const itemAlignVariants: { [key in TPosition]: string } = {
  right: 'justify-end',
  left: 'justify-start',
};

const className =
  'flex items-center h-12 px-4 capitalize rounded-lg gap-x-2 hover:bg-dark-2 hover:text-light-4';

const SideMenu = ({ items, position = 'right' }: TSideMenuProps) => {
  return (
    <div
      className={`${borderRadiusVariants[position]} w-full max-w-xs p-4 bg-dark-elevation-3 drop-shadow-dark-3`}
    >
      {items.map((item) => {
        return (
          <a
            href={item.route}
            className={`${itemAlignVariants[position]} flex items-center h-12 px-4 capitalize rounded-lg gap-x-2 hover:bg-dark-2 hover:text-light-4`}
          >
            {item.icon}
            <p>{item.name}</p>
          </a>
        );
      })}
    </div>
  );
};

export default SideMenu;
