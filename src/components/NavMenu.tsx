import React from 'react';
import { Link } from '../common/types';

type Props = {
  items: Link[];
  close?: React.MouseEventHandler<HTMLAnchorElement>;
};

const NavMenu = ({ items, close }: Props) => {
  return (
    <div
      className={
        'inline-block h-fit w-full rounded-b-lg bg-dark-elevation-3 p-4 drop-shadow-dark-3 sm:w-80'
      }
    >
      {items.map((item) => {
        return (
          <a
            key={item.name}
            href={item.route}
            rel="noreferrer"
            target={item.name === 'resume' ? '_blank' : '_self'}
            className="flex h-12 items-center justify-start gap-x-2 rounded-lg px-4 capitalize hover:bg-dark-2 hover:text-light-4"
            onClick={close}
          >
            {item.svg}
            <p>{item.name}</p>
          </a>
        );
      })}
    </div>
  );
};

export default NavMenu;
