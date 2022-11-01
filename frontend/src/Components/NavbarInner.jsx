import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import "./Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'



const NavbarInner = () => {
  const [showmedia, setshowmedia] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate=useNavigate()
  const HandlelogOut=()=>{
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <>
    <nav className='main-nav'>
    {/* 1st Logo part */}
    <div className='logo'>
      <h2>
        <span>C</span>odiis
        <span>S</span>tream
      </h2>
    </div>
    {/* 2nd menu part */} 
    <div className={showmedia ? 'menu-link mobile-menu-link' :'menu-link'}>
      <ul>
        <li>
          <Link to="/admin">Add Videos</Link>
        </li>
        <li>
        <Link to="/video">Videos</Link>
        </li>
        <li>
          <a href="#" onClick={onOpen}>Contact</a>
        </li>
        <li><Button onClick={HandlelogOut}>Logout</Button></li>
      </ul>
    </div>

    {/* 3rd Social media links */}
    <div className='social-media'>
      <ul className='social-media-desktop'>
      </ul>

       {/* haberger menu */}

    <div className='hamburger-menu'>
      <a href="#" onClick={()=>setshowmedia(!showmedia)}>
        <GiHamburgerMenu/>
      </a>
    </div>
    </div>
  </nav>
  <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="50%">
          <ModalHeader>Project Description</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <b>Thanks</b> for visiting.
            <br />
            ‣ This is Full Stack Video Streaming App with proper
            role based authentication and authorization for Admins and
            Customers.
            <br />
            <b> ➼ Signup & Login</b>
            <br />
            ‣ It starts with signup where user need to select his/her role as
            Admin or Customer along with some other data.
            <br />
            ‣ If credentials are entered correctly, only they will be able to
            Login with token saved in localstorage.
            <br />
            ‣ If role is Admin then they will navigate to #Admin Dashboard
            <br />
            <b> ➼ Admin's Dashboard</b>
            <br />
            ‣ In Admin Dashboard admin can have access of each and every video. Admin can assign and add different videos for perticular plans.
            <br />
            <b> ➼ Customer's Dashboard</b>
            <br />
            For Customer role login they will navigate to Customer Dashboard.
            <br />
            For first time Customer, need to select plan first in between Silver | Gold | Platinum. And need to do necessary payment procedure.
            After succesfull OTP verification only customer can have access to selected plan videos.
            <br />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  </>
  )
}

export default NavbarInner