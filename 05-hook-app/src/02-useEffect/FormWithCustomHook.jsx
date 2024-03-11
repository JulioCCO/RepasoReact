
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const { username, email, password, onInputChange, onResetForm } = useForm({
        username: "",
        email: "",
        password: ''
    });

    return (
        <>
            <h1>Formulario con Custom Hook </h1>
            <hr />

            <input
                value={username}
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={onInputChange}
            />

            <input

                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={onResetForm} className="btn btn-primarey mt-2">Borrar</button>
        </>
    );
}
