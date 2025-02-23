import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(prev => !prev);

  return (
    <ModalContext.Provider value={{ isModalOpen, handleModalOpen }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => useContext(ModalContext);