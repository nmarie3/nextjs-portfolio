'use client'
import React from 'react'
import { createContext, useState, useContext } from 'react';
import { ProjectCard } from '../modules/Projects';

type Props = {
  modalData: ProjectCard | null;
  setModalData: (data: ProjectCard | null) => void;
};

export const ModalContext = createContext<Props | undefined>(undefined);

export const ModalProvider = ({children}: {children:React.ReactNode}) => {
    const [modalData, setModalData] = useState<ProjectCard | null>(null);

    return (
        <ModalContext.Provider value={{ modalData, setModalData}}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be within modalprovider");
    }
    return context;
}

