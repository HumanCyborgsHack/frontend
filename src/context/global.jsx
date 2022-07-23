import React from "react";

const GlobalContext = React.createContext({});
GlobalContext.displayName = "GlobalContext";

function GlobalContextProvider(props) {
    const [user, setUser] = React.useState({});

    const value = React.useMemo(
        () => ({
            user,
            setUser
        }),
        [user, setUser]
    );

    return <GlobalContext.Provider value={value} {...props} />;
}

function useGlobalContext() {
    const context = React.useContext(GlobalContext);
    if (!context) {
        throw new Error(
            "GlobalContext must be used within a GlobalContextProvider"
        );
    }
    return context;
}

export { GlobalContext, GlobalContextProvider, useGlobalContext };
