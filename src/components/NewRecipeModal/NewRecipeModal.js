import { useState } from "react";
import { Button, Modal, Form, Col, Row } from "react-bootstrap";


function NewRecipeModal(props) {
    const { show, handleClose } = props;
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [imgURL, setImgURL] = useState("");

    return (
        <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>New Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalName">
                        <Form.Label column sm={2}>
                            Recipe Name
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Recipe Name" value={name} onChange={e => setName(e.target.value)} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDesc">
                        <Form.Label column sm={2}>
                            Recipe Description
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Recipe Description" value={desc} onChange={e => setDesc(e.target.value)}  />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalImage">
                        <Form.Label column sm={2}>
                            Recipe Image URL
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Recipe Image URL" value={imgURL} onChange={e => setImgURL(e.target.value)}  />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={() => alert(name+desc+imgURL)}>
                    Create Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewRecipeModal;