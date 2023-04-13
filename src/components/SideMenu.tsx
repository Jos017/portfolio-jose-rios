import React from 'react';
import { TNavItems } from '../common/const';

type Props = { items: TNavItems[] };

const SideMenu = ({ items }: Props) => {
  return (
    <div
      className={
        'inline-block w-full sm:w-80 p-4 rounded-b-lg h-fit bg-dark-elevation-3 drop-shadow-dark-3'
      }
    >
      {items.map((item) => {
        return (
          <a
            href={item.route}
            className="flex items-center justify-start h-12 px-4 capitalize rounded-lg gap-x-2 hover:bg-dark-2 hover:text-light-4"
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
