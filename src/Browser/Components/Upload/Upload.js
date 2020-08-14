import React, { createContext } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../../Helpers/useAuth";
import UploadForm from "./UploadForm";
import { Loading } from "./Styles/UploadStyles";

const UserContext = createContext({
    user: null,
});

const Upload = () => {
    const [initializing, user] = useAuth();

    const IsSignedIn = ({ children }) => {
        if (user && !user.isAnonymous) {
            return children[1];
        } else {
            return children[0];
        }
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
