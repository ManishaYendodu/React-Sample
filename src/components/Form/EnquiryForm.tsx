import * as React from 'react';
import { useEffect, useState } from 'react';

import { Alert, InputGroup, InputGroupAddon, InputGroupText, Card, CardText, CardBody, CardTitle,
    CardSubtitle, Button, Form, FormGroup, Label, Input, FormText
    } from 'reactstrap';

const EnquiryForm = () => {

    const [enuieryDetails, setEnquieryDetails] = useState({
        customerName: '',
        email: '',
        phone: '',
        budget: '',
    })

    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        console.log(event)
        setEnquieryDetails(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('test');
        async function submit() {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(enuieryDetails)
            };
            fetch('http://localhost:3002/mailingList', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setEnquieryDetails(data);
                    setShowSuccess(true);
                });
        }
        submit();
    }

    return(
        <div>
                <Card>
                    <CardBody className="text-center">
                        <CardTitle>Find a Dealer</CardTitle>
                        <CardText>Fill out the form fields below..</CardText>
                        <Alert isOpen={showSuccess} color="success">Your data were submitted successfully.</Alert>
                        <Form>
                            <FormGroup>
                                <Input type="text" name="customerName" id="customerName" 
                                onChange={handleChange} 
                                placeholder="what is your name" />
                            </FormGroup>
                            <br />
                        <FormGroup>
                            <Input type="text" name="phone" id="phone" 
                            onChange={handleChange} 
                            placeholder="What is your contact number?" />
                        </FormGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                            <Input type="text" name="email" id="email" 
                            onChange={handleChange} 
                            placeholder="What is your email address?" />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input type="text" name="budget" id="budget" 
                            onChange={handleChange} 
                            placeholder="Do you have a budget you need to stay under?" />
                        </InputGroup>
                        <br/>
                        </Form>
                        <br />
                        <Button onClick={handleSubmit}>Submit</Button>
                    </CardBody>
                </Card>
            </div>
    )
}

export default EnquiryForm;

