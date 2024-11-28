import { Link } from "react-router-dom";
import { logout } from "../../firebase/authentication";
import { useAuth } from "../../context/Auth";

export default function Header() {

    const { autenticado } = useAuth();

    return (
    <nav style={{display: "flex", justifyContent: 'space-around'}}>
        <h1 style={{marginLeft: "40px"}}>Mini Blog</h1>
        <ul style={{display: 'flex', width: '25%', justifyContent: 'space-between', listStyle: "none"}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">Users</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            {(!autenticado) ? (
                <>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                </>
            ) : (
            <>
            <li>
                <Link to="/sac">SAC</Link>
            </li>
            <li>
                <button onClick={() => logout()}>Sair</button>
            </li>
            </>
        )}
        </ul>
    </nav>
    )
}
