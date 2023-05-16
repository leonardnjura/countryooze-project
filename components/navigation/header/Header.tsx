import React, { useContext } from 'react';
import { logo } from '../../../config';


export interface IHeader extends React.ComponentPropsWithoutRef<'header'> {}

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {

  return (
    <header
      {...headerProps}
      className={`w-full flex flex-row justify-between items-center ${className}`}
    >
      <div className="space-x-5 ml-0 mb-4 flex flex-row items-center">
        <a href="/">
          {' '}
          <img
            src={logo}
            alt="Logo"
            width="90"
            height="auto"
            className={`mt-2 rounded-xx`}
          />
        </a>
      </div>

    </header>
  );
};

export default Header;
