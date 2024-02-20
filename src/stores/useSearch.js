import { create } from "zustand";

export const useSearch= create((set)=>({
    isSearching: false,
    setIsSearching: (isSearching) => set({ isSearching }),

    filteredBlogs: [],
    setFilteredBlogs: (filteredBlogs) => set({ filteredBlogs }),
}))