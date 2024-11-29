import { Link } from "react-router-dom";
import { logout } from "../../firebase/authentication";
import { useAuth } from "../../context/Auth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {

    const { autenticado } = useAuth();

    return (

        <Navbar bg='dark' data-bs-theme='dark' >
        <Container>
          <Navbar.Brand href="/">miniBlog</Navbar.Brand>
          <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>       
                <Link to="/users" className="nav-link">Users</Link>
                <Link to="/login" className="nav-link">Login</Link>
                <Link to="/signup" className="nav-link">Signup</Link>
                {(!autenticado) ? (
                    <>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/sac" className="nav-link">SAC</Link>
                    </>
                ) : (
                    <>
                        <Button variant="outline-light" onClick={() => logout()}>Sair</Button>
                    </>
                )}
          </Nav>
        </Container>
      </Navbar>
    )
}
