"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  IPaginationContextProps,
  IPaginationProviderProps,
} from "@/interfaces";

const PaginationContext = createContext<IPaginationContextProps | undefined>(
  undefined
);

export const PaginationProvider: React.FC<IPaginationProviderProps> = ({
  totalPages,
  children,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationContext.Provider
      value={{ currentPage, totalPages, handlePageChange }}
    >
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
