import {LoginIntro} from "../../components/loginIntro/loginIntro.jsx";
import {useState} from "react";
import {EnterNumber} from "../../components/enterNumber/enterNumber.jsx";


export const LoginPage = () => {
    const [authState, setAuthState] = useState('introduce')

    return (
        <>
            {
                authState === 'introduce' ? <LoginIntro setAuthState={setAuthState} /> : <EnterNumber />
            }

        </>
    )
}