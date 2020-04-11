import  React , { Component } from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input } from 'reactstrap';


import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({name: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            id: uuid(),
            name: this.state.name
        }

        //Add Item via addItem action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    }
render() {
    return(
        <div>
            <Button color="dark" 
                    style={{marginBottom:'2rem'}} 
                    onClick={this.toggle}>
                add Item
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>
                    Add To Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="item">Item</Label>
                            <Input 
                                type="text" 
                                name="name" 
                                id="item" 
                                placeholder="Add Shopping Item"
                                onChange={this.onChange}
                            />
                            <Button color="dark" 
                                    style={{marginTop: '2rem'}}
                                    block
                            >
                                Add Item
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

}

const mapStateToProps = state => ({
    item: state.item
})

export default connect(mapStateToProps, { addItem })(ItemModal);