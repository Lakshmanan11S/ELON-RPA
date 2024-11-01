import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from 'reactstrap';
import Layout from '../Components/Layout';
import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const PatientFind = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const handleSearch = () => {
    setIsSearchActive(true); // Enable tabs display on search
  };

  const toggleTab = (tabId:any) => {
    if (activeTab !== tabId) {
      setActiveTab(tabId); // Set activeTab to the selected tab's ID
    }
  };

  const handleMedicalDownloadFile =async ()=>{
    const medicalcontent =  document.getElementById('ChartContent');
    if(medicalcontent){
      const canvas = await html2canvas(medicalcontent);
      const imageData =  canvas.toDataURL('image/png');
      const pdf = new jsPDF("p","mm","a4");
      pdf.addImage(imageData,"PNG",10,10,190,0);
      pdf.save("TEST TEST Chart.pdf")
    }
  }
  const handleBillingDownloadFile = async()=>{
    const billingContent = document.getElementById('BillingContent');
    if(billingContent){
      const canvas = await html2canvas(billingContent);
      const imageData = canvas.toDataURL('image.png');
      const pdf = new jsPDF("p","mm","a4");
      pdf.addImage(imageData,"PNG",10,10,190,0);
      pdf.save("TEST TEST Billing.pdf")
    }
  }

  return (
    <Layout>
      <div className="patientFind">
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>First Name</Label>
                <Input name="firstName" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Last Name</Label>
                <Input name="lastName" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Date of Birth</Label>
                <Input name="dob" type="date" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Birth Sex</Label>
                <Input name="birthSex" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>From Date</Label>
                <Input name="FromDate" type="date" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>To Date</Label>
                <Input name="LastDate" type="date" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleAddress">Address</Label>
            <Input id="exampleAddress" name="address" placeholder="1234 Main St" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress2">Address 2</Label>
            <Input id="exampleAddress2" name="address2" placeholder="Apartment, studio, or floor" />
          </FormGroup>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">City</Label>
                <Input id="exampleCity" name="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">State</Label>
                <Input id="exampleState" name="state" />
              </FormGroup>
            </Col>
          </Row>
          <Button onClick={handleSearch}>Search</Button>
        </Form>
      </div>

      {isSearchActive && (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={activeTab === "1" ? "active" : ""}
                onClick={() => toggleTab("1")}
              >
                Allergy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "2" ? "active" : ""}
                onClick={() => toggleTab("2")}
              >
                Chart
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "3" ? "active" : ""}
                onClick={() => toggleTab("3")}
              >
                Billing
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <div className="py-5">
                    <span>
                      Emergency Contacts: Provide space for emergency contact information, such as family or medical
                      contacts, and make it easily accessible.
                    </span>
                  </div>
                  <div className="py-5">
                    <span>
                      Emergency Action Plan: Include steps to take if a reaction occurs, especially for severe
                      allergies. For example, “Administer Epinephrine” and “Call 911.”
                    </span>
                  </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
              
              <div className='d-flex py-5' style={{justifyContent:"end"}}>
                <button className='Chart btn btn-success' onClick={handleMedicalDownloadFile}>Download Pdf</button>
              </div>
              <div id='ChartContent' className='content' style={{border:"1px solid"}}>
              <h2 className='py-3'>Medical Summary</h2>
                <h3>TEST TEST 01/01/1985</h3>
                <div className='chart-content'>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>05/07/2000</td>
                        <td>Checkup</td>
                        <td>Good</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>05/15/2000</td>
                        <td>Checkup</td>
                        <td>Good</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>06/25/2000</td>
                        <td>Checkup</td>
                        <td>Good</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>07/05/2000</td>
                        <td>Checkup</td>
                        <td>Good</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
         
              </Row>
            </TabPane>
            <TabPane tabId="3">
              <Row>
                
              <div className='d-flex py-5' style={{justifyContent:"end"}}>
                <button className='Billing btn btn-success' onClick={handleBillingDownloadFile}>Download Pdf</button>
              </div>
              <div id='BillingContent' className='content' style={{border:"1px solid"}}>
              <h2 className='py-3'>Billing Summary</h2>
                <h3>TEST TEST 01/01/1985</h3>
                <div className='chart-content'>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>05/07/2000</td>
                        <td>Checkup</td>
                        <td>Rs.7500</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>05/15/2000</td>
                        <td>Checkup</td>
                        <td>Rs.3500</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>06/25/2000</td>
                        <td>Checkup</td>
                        <td>Rs.5000</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>07/05/2000</td>
                        <td>Checkup</td>
                        <td>Rs.2500</td>
                      </tr>
                    </tbody>
                  </table>

                </div>
              </div>
         
              </Row>
            </TabPane>
          </TabContent>
          
        </div>
      )}
    </Layout>
  );
};

export default PatientFind;
