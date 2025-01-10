// Questo file contiene:
// Le costanti di configurazione API
// Il service delle API
// Il custom hook useBooks che espone tutte le funzionalità necessarie

// Il custom hook useBooks fornisce:
// I dati dei libri e lo stato del caricamento
// Le funzioni per creare e eliminare i libri
// La gestione automatica del refetch dopo le operazioni

// hooks/useBooks.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_CONFIG = {
  BASE_URL: "http://localhost:3000",
  ENDPOINTS: {
    recipes: "/Ricette",
  },
};

const apiService = {
  fetchBooks: async () => {
    try {
      const response = await axios.get(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.recipes}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  },

  createBook: async (bookData) => {
    try {
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.recipes}`,
        bookData
      );
      return response.data;
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  },

  deleteBook: async (id) => {
    try {
      const response = await axios.delete(
        `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.recipes}/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting book:", error);
      throw error;
    }
  },
};

export function useBooks() {
  const {
    data: books,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["books"],
    queryFn: apiService.fetchBooks,
    refetchOnWindowFocus: false,
  });

  const createBook = async (bookData) => {
    try {
      await apiService.createBook(bookData);
      refetch();
    } catch (error) {
      console.error("Error creating book:", error);
      throw error;
    }
  };

  const deleteBook = async (id) => {
    try {
      await apiService.deleteBook(id);
      refetch();
    } catch (error) {
      console.error("Error deleting book:", error);
      throw error;
    }
  };

  return {
    books,
    isLoading,
    isError,
    createBook,
    deleteBook,
  };
}