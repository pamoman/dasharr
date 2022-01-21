import { createContext, useContext } from 'react';

export const ConfigContext = createContext();

export const ConfigProvider = ConfigContext.Provider;

export const useConfig = () => {
    return useContext(ConfigContext);
};