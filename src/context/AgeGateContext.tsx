import React, { createContext, useContext, useEffect, useState } from 'react';

interface AgeGateContextType {
  isVerified: boolean;
  verifyAge: () => void;
  resetAgeGate: () => void;
}

const AgeGateContext = createContext<AgeGateContextType | undefined>(undefined);

export const AgeGateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVerified, setIsVerified] = useState<boolean>(() => {
    return localStorage.getItem('bsd_ruo_age_verified') === 'true';
  });

  const verifyAge = () => {
    setIsVerified(true);
    localStorage.setItem('bsd_ruo_age_verified', 'true');
  };

  const resetAgeGate = () => {
    setIsVerified(false);
    localStorage.removeItem('bsd_ruo_age_verified');
  };

  return (
    <AgeGateContext.Provider value={{ isVerified, verifyAge, resetAgeGate }}>
      {children}
    </AgeGateContext.Provider>
  );
};

export const useAgeGate = () => {
  const context = useContext(AgeGateContext);
  if (!context) throw new Error('useAgeGate must be used within AgeGateProvider');
  return context;
};
