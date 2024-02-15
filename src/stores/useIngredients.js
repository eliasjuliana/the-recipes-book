import { create } from "zustand";

export const useIngredients = create((set)=>({
    ingredients: null,
    setIngredientsToEdit: (ingre)=>set({blog}),
    clearBlog: ()=>set({blog: null})

}))