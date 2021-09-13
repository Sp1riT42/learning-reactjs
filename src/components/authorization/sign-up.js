import {LoginForm} from "./auth-form";
import {AuthTemplate} from "./auth-template";
import {firebaseApp} from "../../api/firebase";
import { Link } from "react-router-dom"

const onSubmit = (email, password) => {
    console.log(email, password)
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password)
}

export function SignUp() {
    return (
        <AuthTemplate link={<Link to="login">У вас есть аккаунт? Войдите</Link>}>
            <LoginForm
                title="Регистрация"
                submitButton="Зарегистрироваться"
                onSubmit={onSubmit}
            />
        </AuthTemplate>
    )
}