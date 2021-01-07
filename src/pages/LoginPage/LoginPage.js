import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './LoginPage.css'

function LoginPage() {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");



    return (
        <div className="p-login">
            <h1>Login to Recipe Book</h1>
            <p>or <Link to="/signup">create an account</Link></p>
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
               
                <Button variant="success" type="button" block onClick={() => alert(email + " " + pwd)}>
                    Login
                </Button>
            </Form>
        </div>
    )

}

export default LoginPage;