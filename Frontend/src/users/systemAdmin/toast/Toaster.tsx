// MainLayout.tsx

import React from 'react';
import { Toaster, ToasterProps } from 'react-hot-toast';

const Toast: React.FC<ToasterProps> = ({ children }) => {
  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default Toast;
