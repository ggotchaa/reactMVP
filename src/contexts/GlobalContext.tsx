import React, { useContext, createContext, useReducer } from 'react';
import Cookies from 'js-cookie';

// Define the shape of your state here
type State = {
  isProd: boolean;
  isAuthorized: boolean;
  token: string;
  langSelected: string;
  userRoles: string[];
};

// Define the shape of your actions here
type Action = { type: string; payload: any };

type GlobalContextType = {
  state: State;
  dispatch: (action: Action) => void;
};

interface GlobalContextProps {
	children: React.ReactNode;
}

const initial_values: State = {
  isProd: process.env.NODE_ENV === 'production',
  isAuthorized: process.env.NODE_ENV !== 'production',
  token: process.env.NODE_ENV === 'production' ? '' : 'token',
  langSelected: localStorage.language || 'ru-RU',
  userRoles: ['school', 'super_admin'],
};

const reducer = (state: State, action: Action): State => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_TOKEN':
      Cookies.set('token', payload, { secure: true });
      return { ...state, token: payload };
    case 'SET_LANGUAGE':
      localStorage.language = payload;
      return { ...state, langSelected: payload };
    default:
      console.log('[GlobalContext] reducer: no set new state');
      return state;
  }
};

const AContext = createContext<GlobalContextType>(undefined!);

const GlobalContext: React.FC<GlobalContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initial_values);
  
	return <AContext.Provider value={{ state, dispatch }}>{children}</AContext.Provider>;
  };
export const useGlobalContext = () => useContext(AContext);
export default GlobalContext;
