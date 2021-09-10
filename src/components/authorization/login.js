import {LoginForm} from "./auth-form";
import {AuthTemplate} from "./auth-template";
import {firebaseApp} from "../../api/firebase";
import { Link } from "react-router-dom"

const onSubmit = (email, password) => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
}

export function Login() {
    return (
        <AuthTemplate
            link={<Link to="sign-up">У вас нет аккаунта? Зарегистрируйтесь</Link>}
        >
            <LoginForm title="Авторизация" submitButton="Войти" onSubmit={onSubmit} />
        </AuthTemplate>
    )
}