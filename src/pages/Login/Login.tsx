import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router";

const Login = () => {

    const [name, setName] = useState("");
    const [role, setRole] = useState<"manager" | "customer">("customer");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) return alert ("Ingresa un nombre");

        dispatch(login({name, role}));
        navigate("/store");
    }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Iniciar Sesion</h1>

                <input
                type="text"
                placeholder="Tu nombre aqui"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />

                <select value={role} onChange={(e) => setRole(e.target.value as "manager" | "customer")}>
                    <option value="customer">Customer</option>
                    <option value="manager">Manager</option>
                </select>

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
        </>
    )
}

export default Login;