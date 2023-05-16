import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ICountryData } from '../../../data/types';

export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {
  surferCountryData: ICountryData;
}

const Footer: React.FC<IFooter> = ({
  className,
  surferCountryData,
  ...footerProps
}) => {

  return (
    <footer
      {...footerProps}
      className={`w-full p-4 bg-gray-900 dark:bg-gray-800 text-slate-700 dark:text-slate-600 ${className}`}
    >
      <div className="flex flex-row justify-between">
        Footer
      </div>
    </footer>
  );
};

export default Footer;
