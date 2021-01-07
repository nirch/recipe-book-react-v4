import { Button, Modal, Form, Col, Row } from "react-bootstrap";


function NewRecipeModal(props) {
    const { show, handleClose } = props;

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
                            <Form.Control type="text" placeholder="Recipe Name" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalDesc">
                        <Form.Label column sm={2}>
                            Recipe Description
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Recipe Description" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formHorizontalImage">
                        <Form.Label column sm={2}>
                            Recipe Image URL
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Recipe Image URL" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Create Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewRecipeModal;