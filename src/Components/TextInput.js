import React from 'react';
import { Button, Container, Form } from 'semantic-ui-react';
import '../App.css';

function TextInput() {
    return ( 
    <Container fluid className="container">
    <Form className="form">
      <Form.Field>
        <label>Employee's name</label>
        <input placeholder='Enter their name' />
      </Form.Field>
      <Form.Field>
        <label>Employee's date of birth</label>
        <input placeholder='Enter their date of birth' />
      </Form.Field>
      
      <Button color="blue" type='submit'>Submit</Button>
    </Form>
  </Container>)
}

export { TextInput }