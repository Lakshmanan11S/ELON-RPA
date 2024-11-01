import '../assets/Scss/App.scss';
import Layout from '../Components/Layout'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const CreatePatient = () => {
  return (
    <Layout>
      <div className='createPatient'>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>
                  First Name
                </Label>
                <Input
                  name="firstName"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Last Name
                </Label>
                <Input
                  name="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Date of Birth 
                </Label>
                <Input
                  name="dob"
                  type='date'
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>
                  Birth Sex
                </Label>
                <Input
                  name="Last Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">
              Address
            </Label>
            <Input
              id="exampleAddress"
              name="address"
              placeholder="1234 Main St"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">
              Address 2
            </Label>
            <Input
              id="exampleAddress2"
              name="address2"
              placeholder="Apartment, studio, or floor"
            />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">
                  City
                </Label>
                <Input
                  id="exampleCity"
                  name="city"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">
                  State
                </Label>
                <Input
                  id="exampleState"
                  name="state"
                />
              </FormGroup>
            </Col>
          </Row>
          <Button>
            Register 
          </Button>
        </Form>
      </div>
    </Layout>

  )
}

export default CreatePatient