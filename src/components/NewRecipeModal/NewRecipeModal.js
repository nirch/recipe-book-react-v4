import { useState } from "react";
import { Button, Modal, Form, Col, Row, Image } from "react-bootstrap";
import './NewRecipeModal.css'


function NewRecipeModal(props) {
    const { show, handleClose, addRecipe } = props;
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState(null);

    function closeModal() {
        setName("");
        setDesc("");
        setImg(null);
        handleClose();
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setImg(e.target.files[0]);
        } else {
            setImg(null);
        }
    }

    const imgURL = img ? URL.createObjectURL(img) : "";

    function handleAddRecipe() {
        // 1) triggers addRecipe at App that will then add this recipe to its recipes state
        addRecipe(name, desc, imgURL);

        // 2) cleanup (clean all field + close the modal)
        closeModal();
    }

    return (
        <Modal show={show} onHide={closeModal} size="xl" className="c-new-recipe-modal">
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
                            Recipe Image
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange} />
                        </Col>
                    </Form.Group>
                </Form>
                <Image src={imgURL} className="img-preview"/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={handleAddRecipe}>
                    Create Recipe
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default NewRecipeModal;