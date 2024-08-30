import React, { createContext, useContext, useState, ReactNode } from "react";

interface PaginationContextProps {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}

interface PaginationProviderProps {
  totalPages: number;
  children: ReactNode; // Declaramos que children es un ReactNode
}

const PaginationContext = createContext<PaginationContextProps | undefined>(undefined);

export const PaginationProvider: React.FC<PaginationProviderProps> = ({ totalPages, children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContext.Provider value={{ currentPage, totalPages, handlePageChange }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error("usePagination must be used within a PaginationProvider");
  }
  return context;
};
