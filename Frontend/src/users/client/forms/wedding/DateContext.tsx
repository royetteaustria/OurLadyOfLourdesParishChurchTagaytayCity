import { createContext, useState } from 'react';

interface DateContextType {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

export const DateContext = createContext<DateContextType>({
  selectedDate: null,
  setSelectedDate: () => {},
});

export const DateProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <DateContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </DateContext.Provider>
  );
};