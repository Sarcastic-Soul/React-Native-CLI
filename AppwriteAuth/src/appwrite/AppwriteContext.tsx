import React, { createContext, FC, PropsWithChildren, useEffect, useMemo, useState } from 'react';
import Appwrite from './service';

type AppContextType = {
    appwrite: Appwrite;
    isLoggedIn: boolean;
    setIsLoggedIn: (isLoggedIn: boolean) => void;
};

export const AppwriteContext = createContext<AppContextType | null>({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => { }
});

export const AppwriteProvider: FC<PropsWithChildren> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const appwrite = useMemo(() => new Appwrite(), []);

    useEffect(() => {
        const checkSession = async () => {
            try {
                const session = await appwrite.getSession(); // Replace with actual session check
                setIsLoggedIn(!!session);
            } catch {
                setIsLoggedIn(false);
            }
        };
        checkSession();
    }, [appwrite]);

    useEffect(() => {
        console.log('AppwriteProvider isLoggedIn:', isLoggedIn);
    }, [isLoggedIn]);
    const defaultValue = {
        appwrite,
        isLoggedIn,
        setIsLoggedIn,
    };

    return <AppwriteContext.Provider value={defaultValue}>{children}</AppwriteContext.Provider>;
};

export default AppwriteContext;
