import React, { createContext } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { useAuth } from "../../../Helpers/useAuth";
import UploadForm from "./UploadForm";
import { Loading } from "./Styles/UploadStyles";

const UserContext = createContext({
    user: null,
});

const Upload = () => {
    const [initializing, user] = useAuth();

    const IsSignedIn = ({ children }) => {
        return !user ? children[0] : children[1];
    };

    if (initializing) {
        return <Loading> Loading... </Loading>;
    }

    return (
        <UserContext.Provider value={{ user }}>
            <IsSignedIn>
                <Redirect to="/signin" />
                <UploadForm />
            </IsSignedIn>
        </UserContext.Provider>
    );
};

export default Upload;
