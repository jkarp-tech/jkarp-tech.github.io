import { useEffect, useState } from "react";
import { projectAuth } from "../Firebase/config";

const AnonymousProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
        projectAuth
            .signInAnonymously()
            .then((user) => {
                debugger;
                setSignedIn(true);
            })
            .catch((error) => {
                debugger;
            });
        return () => {
            setSignedIn(false);
        };
    }, []);

    if (signedIn) {
        return children;
    }
    return null;
};

export default AnonymousProvider;
