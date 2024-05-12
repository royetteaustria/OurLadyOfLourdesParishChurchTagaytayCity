import React, { createContext, useState, ReactNode } from 'react';

interface ContextProps {
  inquiriesCount: number;
  addInquiry: () => void;
}

export const InquiriesContext = createContext<ContextProps>({
  inquiriesCount: 0,
  addInquiry: () => {},
});

interface Props {
  children: ReactNode;
}

export const InquiriesProvider: React.FC<Props> = ({ children }) => {
  const [inquiriesCount, setInquiriesCount] = useState(0);

  const addInquiry = () => {
    setInquiriesCount((prevCount) => prevCount + 1);
  };

  return (
    <InquiriesContext.Provider value={{ inquiriesCount, addInquiry }}>
      {children}
    </InquiriesContext.Provider>
  );
};
