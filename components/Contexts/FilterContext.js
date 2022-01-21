import { createContext, useContext } from 'react';

export const FilterContext = createContext();

export const FilterProvider = FilterContext.Provider;

export const useFilters = () => {
    return useContext(FilterContext);
};