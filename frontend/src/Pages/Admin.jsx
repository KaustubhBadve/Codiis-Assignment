import { Box, Button, Heading, Input, Select } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import NavbarInner from '../Components/NavbarInner'
import "./CSS/Admin.css"


const Admin = () => {
  const [videos, setvideos] = useState([])
  const [name, setname] = useState("")
  const [plan, setplan] = useState("")

  const hadleSubmit = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (let key in videos) {
      formdata.append("videos", videos[key]);
    }

    formdata.append("name", name);
    formdata.append("plan", plan);
    axios.post(`https://codissstream.herokuapp.com/api/v1/media/create`,formdata)
      .then((success) => {
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };


  return (
   <Box>
    <NavbarInner/>
    <Box className='Admin_outer'>
    <Heading>Admin Section</Heading>
    <Box className='Admin_Inner_main'>
    <Box className='Procedure'>
    <Box>Procedure to follow</Box>
    <Box> <span>1.</span>  <span>Select Video</span> </Box>
    <Box> <span>2.</span>  <span>Select Plan to assign</span></Box>
    <Box> <span>3.</span>  <span>Verify</span></Box>
    <Box> <span>4.</span>  <span>Submit</span></Box>
    </Box>

    <form onSubmit={hadleSubmit}>
        <Box className="form-group">
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={(e) => setname(e.target.value)}
          />
        </Box>
        <Box className="form-group">
          <label htmlFor="videos">Upload Videos</label>
          <Input
            type="file"
            name="videos"
            id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setvideos(e.target.files);
            }}
          />
        </Box>

        <label htmlFor="">
        Select Plan 
        <Select value={plan} onChange={(e)=>setplan(e.target.value)}>
        <option value="platinum">Platinum</option>
        <option value="gold">Gold</option>
        <option value="silver">Silver</option>
      </Select>
      </label>
        <Button colorScheme="facebook" w="30%" type='submit'>Add</Button>
      </form>
    </Box>
 </Box>
   </Box>
  )
}

export default Admin