import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'semantic-ui-react';
import '../App.css';

function TextInput() {

    const [employeeName, setName] = useState('');
    const [dob, setDob] = useState('');

    useEffect(() => {
        console.log(employeeName, dob);
    })
    

    return ( 
        <Container fluid className="container">
            <Form className="form">
            <Form.Field>
                <label>Employee's name</label>
                <input placeholder='Enter their name' name = "name" value={employeeName} onChange={e => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <label>Employee's date of birth</label>
                <input placeholder='Enter their date of birth' name = "dob" value={dob} onChange={e => setDob(e.target.value)} />
            </Form.Field>
            
            <Button color="blue" type='submit'>Submit</Button>
            </Form>
        </Container>)
}
console.log()

export { TextInput }