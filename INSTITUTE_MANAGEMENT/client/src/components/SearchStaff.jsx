import React from "react";
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBIcon } from "mdbreact";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ViewModel from "./modal/staffmodal/ViewModel";


const SearchStaff = (props) => {

  const [show, setShow] = useState(false);
  const [staffId, setStaffId] = useState(false);
  const handleClose = () => setShow(false);
  
  function searchId(e){
    if(e.keyCode==13){
      setShow(true);
    }
  }

  // const getData = async (e)=> {
  //   if(e.keyCode === 13){
  //   await axios.get(`http://localhost:5000/api/staff/${staffId}`)
  //   .then(function (response) {
  //     console.log(response.data)
  //     if(response.data != null){    
  //       setName(response.data['name'])
  //       setEmploymentType(response.data['employment_type'])
  //       setAge(response.data['age'])
  //       console.log(staffId)
  //       console.log(response.data['age'])
  //     }else{
  //       alert('invalid staff id')
  //     }
  //     })
  //   .catch(function (error) {
  //       console.log(error);
  //       alert(" details can't search" );      
  //     })
  //   }
  //   }
  return (
     
    <div>
          <div class="row">
            <div class="col-sm-10"></div>
            <div class="col-sm-5"></div>
    <MDBCol md="4">
      
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75 float-right" type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{setStudentId(e.target.value)}} onKeyDown={(e) => searchId(e) }/>

    </MDBCol>
    </div>
    <Modal show={show}        
        size="lg"
        centered
      >
        
        <ViewModel staffID={staffId}/>
        <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          </Modal.Footer>
      </Modal>
      
    </div>

  );
}

export default Search;