import React, { useState } from "react";
import { projectAuth } from "../../../Firebase/config";
import { useHistory } from "react-router-dom";
import {
    SignInContainer,
    Header,
    Email,
    Password,
    Submit,
    Error,
} from "./Styles/SignInStyles";

const SignIn = () => {
    const history = useHistory();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const SubmitSignIn = () => {
        projectAuth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/upload");
            })
            .catch((error) => {
                setError(true);
            });
    };

    const onChangeUsername = ({ target }) => {
        setEmail(target.value);
    };

    const onChangePassword = ({ target }) => {
        setPassword(target.value);
    };

    const IsError = ({ children }) => (error ? children : null);

    return (
        <SignInContainer>
            <Header> Sign In </Header>
            <Email onChange={onChangeUsername} placeholder={"Email"} />
            <Password
                type={"password"}
                onChange={onChangePassword}
                placeholder={"password"}
            />
            <Submit onClick={SubmitSignIn}> Login </Submit>
            <IsError>
                <Error>Incorrect Username or Password</Error>
            </IsError>
        </SignInContainer>
    );
};

export default SignIn;
