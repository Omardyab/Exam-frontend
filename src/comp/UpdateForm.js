import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
export class UpdateForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Form</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <Form onSubmit={this.props.updateData}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='name' defaultValue={this.props.name} />
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="text" name='img' defaultValue={this.props.img} />
                              
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>

                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default UpdateForm
