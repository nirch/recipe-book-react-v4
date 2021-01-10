import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import './LoginPage.css';
import Parse from 'parse';
import UserModel from "../../model/UserModel";

function LoginPage(props) {
    const [email, setEmail] = useState("nir@nir.com");
    const [pwd, setPwd] = useState("123");
    const [showLoginError, setShowLoginError] = useState(false);
    const [redirectToRecipes, setRedirectToRecipes] = useState(false);
    const {onLogin} = props;
    
    function login() {

        // Pass the username and password to logIn function
        Parse.User.logIn(email, pwd).then(parseUser => {
            // Trigger onLogin event prop + update redirect state so we will redirect to recipes page
            onLogin(new UserModel(parseUser));
            setRedirectToRecipes(true);
        }).catch(error => {
            // show an error alert
            console.error('Error while logging in user', error);
            setShowLoginError(true);
        });

    }


    if (redirectToRecipes) {
        return <Redirect to="/recipes"/>;
    }

    return (
        <div className="p-login">
            <h1>Login to Recipe Book</h1>
            <p>or <Link to="/signup">create an account</Link></p>
            {showLoginError ? <Alert variant="danger">Invalid Credentials!</Alert> : null}
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={pwd} onChange={e => setPwd(e.target.value)} />
                </Form.Group>
               
                <Button variant="success" type="button" block onClick={login}>
                    Login
                </Button>
            </Form>
        </div>
    )

}

export default LoginPage;