import { createContext } from "react";

export const StocksContext = () => createContext({
    stocks: [],
    addNewStock: () => { },
    deleteStock: () => { },
})
