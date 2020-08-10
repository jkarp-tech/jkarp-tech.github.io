import React, { useState } from "react";
import { projectAuth } from "../Firebase/config";

export const useAuth = () => {
    const [state, setState] = useState([
        !projectAuth.currentUser,
        projectAuth.currentUser,
    ]);

    const onChange = (user) => {
        setTimeout(() => setState([false, user]), 500);
    };

    React.useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged(onChange);

        return () => unsubscribe();
    }, []);

    // [ initializing, user]
    return state;
};
