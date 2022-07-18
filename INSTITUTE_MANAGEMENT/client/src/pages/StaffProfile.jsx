import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import { Col, Row, Form, Container } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import Header from '../components/Header';
import TeacherSideNav from '../components/TeacherSideNav';
import { Context } from '../context/Context';
import Footer from '../components/Footer';

export default function StaffProfile(props) {
  const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  const handleClose = () => setShow(false);
  const { user } = useContext(Context);


  const PF = "http://localhost:5000/profilepic/"


  return (

    <>
      <Header />
      {/* <TeacherSideNav /> */}
      <div className="container justify-content-center" style={{background: ' #B6D0E5'}}>

        <div class="row" >
          
           
            <Form>
            <br/><br/><br/><br/><br/>
              <div className='row justify-content-center'>
                <Col sm={3}>
                  <fieldset>

                    <Form.Group as={Col} className="p-2 bd-highlight">

                      <Container className='text-center'>
                        <Col sm={11}>
                          <MDBCol>
                            <img src={PF + user.profile_pic} className='img-fluid rounded' alt='' />
                          </MDBCol>
                        </Col>
                      </Container>
                    </Form.Group>
                  </fieldset>
                </Col>
              </div>


              <br></br>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="4">
                  <strong>Employee Type </strong>
                </Form.Label>
                <Col sm="5">
                  <Form.Control type="text" placeholder="Enter your Employee Type " value={user.employment_type} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="4">
                  <strong>Full Name  </strong>

                </Form.Label>
                <Col sm="5">
                  <Form.Control type="text" placeholder="Enter your Full Name " value={user.name} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  <strong>Age</strong>

                </Form.Label>
                <Col sm="5">
                  <Form.Control type="text" placeholder="Enter your age" max="2022-04-26" value={user.age} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  <strong>Gender</strong>

                </Form.Label>
                <Col sm="5">
                  <Form.Control type="text" placeholder="Enter your gender" value={user.gender} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  <strong> Core Subject</strong>

                </Form.Label>
                <Col sm="5">
                  <Form.Control type="text" placeholder="Disabled" value={user.core_subject} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="4">
                  <strong>Email Address </strong>

                </Form.Label>
                <Col sm="5">
                  <Form.Control type="Email" placeholder="Enter your  Email Address" value={user.email} required />
                </Col>
              </Form.Group>


              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="4">
                  <strong>Address</strong>

                </Form.Label>
                <Col sm="5">
                  <Form.Control type="textarea" placeholder="Enter your Address" value={user.address} />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="4">
                  <strong>Position</strong>

                </Form.Label>
                <Col sm="5">
                  <Form.Control type="text" placeholder="Disabled" value={user.position} readOnly />
                </Col>
              </Form.Group>


            </Form>
          </div>
        
        <Footer/>
      </div>

    </>
  );
}