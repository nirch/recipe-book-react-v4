import { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ActiveUserContext from "../../shared/ActiveUserContext";



function RecipeNavbr(props) {
    const activeUser = useContext(ActiveUserContext);
    const { onLogout } = props;

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#/">Recipe Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {activeUser ? <Nav.Link href="#/recipes">Recipes</Nav.Link> : null}
                </Nav>
                <Nav className="ml-auto">
                    {activeUser ? null : <Nav.Link href="#/login">Login</Nav.Link>}
                    {activeUser ? null : <Nav.Link href="#/signup">Signup</Nav.Link>}
                    {activeUser ? <Nav.Link href="javascript:void(0)" onClick={() => onLogout()}>Logout</Nav.Link> : null}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default RecipeNavbr;