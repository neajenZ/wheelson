import {LoginIntro} from "../../components/loginIntro/loginIntro.jsx";
import {useState} from "react";
import {EnterNumber} from "../../components/enterNumber/enterNumber.jsx";
import {AuthorizationPage} from "../authorization/authorization";


export const LoginPage = () => {
    const [authState, setAuthState] = useState('introduce')

    return (
        <>
            {
                authState === 'introduce' ? <LoginIntro setAuthState={setAuthState} /> : <AuthorizationPage />
            }

        </>
    )
}