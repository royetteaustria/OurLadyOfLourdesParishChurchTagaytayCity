// Loader.tsx
import React from "react";

const ModalLoader: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-transparent">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default ModalLoader;
