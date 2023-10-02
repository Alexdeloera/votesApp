import React, { useState } from 'react';
import { ISession, } from '../interface/session.interface';
import { sessionProvider } from './SessionContext';



interface UserContextProviderProps {
  children: React.ReactNode;
}

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [session, setSession] = useState<ISession>({
    id: 0,
    name: '',
    token: ''
  });


  const toggleSession = (data: ISession) => {
    setSession(data);
  }

  const [search, setSearch] = useState('');

  const handlechange = (values: string) => {
    setSearch(values);
  }

  return (
    <sessionProvider.Provider value={{ session, toggleSession, search, handlechange }}>
      {children}
    </sessionProvider.Provider>
  );
}
