import React, { createContext, FC } from 'react';

export const FilterContext = createContext<null | INewsFilter>(null);

export const FilterContextProvider: FC<{ filter: INewsFilter }> = ({ filter, children }) => (
  <FilterContext.Provider value={filter}>{children}</FilterContext.Provider>
);
