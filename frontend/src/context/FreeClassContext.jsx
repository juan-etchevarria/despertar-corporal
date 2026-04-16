import React, { createContext, useContext, useState } from 'react';

const FreeClassContext = createContext();

export const useFreeClass = () => useContext(FreeClassContext);

export const FreeClassProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <FreeClassContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </FreeClassContext.Provider>
  );
};
