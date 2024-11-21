import { Link } from "react-router-dom";

export default function Header() {
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
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/sac">SAC</Link>
            </li>
        </ul>
    </nav>
    )
}
