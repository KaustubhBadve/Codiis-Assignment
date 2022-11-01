import { Box, Button, Heading } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./CSS/Subscription.css"
const Subscription = () => {
  const navigate = useNavigate();
    const token=localStorage.getItem("token")
    const HandlePlatinum=()=>{
          let obj={plan:"platinum"}
          axios.patch("https://codissstream.herokuapp.com/auth/updatePlan",obj,{
            headers: {
                Authorization: token,
              },
          }).then((res)=>{
            localStorage.setItem("planPrice","249")
            navigate("/otp")
          })
    }

    const HandleGold=()=>{
        let obj={plan:"gold"}
        axios.patch("https://codissstream.herokuapp.com/auth/updatePlan",obj,{
             headers: {
                Authorization: token,
              },
        }).then((res)=>{
          localStorage.setItem("planPrice","199")
          navigate("/otp")
        })
  }

  const HandleSilver=()=>{
    let obj={plan:"silver"}
    axios.patch("https://codissstream.herokuapp.com/auth/updatePlan",obj,{
         headers: {
                Authorization: token,
              },
    }).then((res)=>{
      localStorage.setItem("planPrice","99")
      navigate("/otp")
    })
}

  return (
    <Box className='main_Outer'>
        <Heading>One Time Subscribe!, Enjoy lifetime</Heading>
        <h3>As a first time user you need to subscribe first to any given plan to enjoy premium feutures</h3>
        <h1>Subscription Plans</h1>
        <Box className='plans_outer'>
            <Box>
                <Box>Plan : <span>Platinum</span></Box>
                <Box>Validity : <span>30 days</span></Box>
                <Box>Feutures : <span>3 Mobile | 2 Laptop | 2 Desktop Screen supported and access to premium contents</span></Box>
                <Box className='subscription_offers'>
                    <Box>
                        <Box>29% OFF</Box>
                        <Box>Price <s>Rs 349</s> <span className='main_price'>Rs 249</span></Box>
                    </Box>
                    <Button onClick={HandlePlatinum} colorScheme="facebook">SUBSCRIBE</Button>
                </Box>
            </Box>

            <Box>
                <Box>Plan : <span>Gold</span></Box>
                <Box>Validity : <span>30 days</span></Box>
                <Box>Feutures : <span>2 Mobile | 1 Laptop Screen supported and Technolodgy and entertainment videos can access</span></Box>
                <Box className='subscription_offers'>
                    <Box>
                        <Box>29% OFF</Box>
                        <Box>Price <s>Rs 249</s> <span className='main_price'>Rs 199</span></Box>
                    </Box>
                    <Button onClick={HandleGold} colorScheme="facebook">SUBSCRIBE</Button>
                </Box>
            </Box>

            <Box>
                <Box>Plan : <span>Silver</span></Box>
                <Box>Validity : <span>30 days</span></Box>
                <Box>Feutures : <span>Only 1 Mobile Screen supported and local videos can access</span></Box>
                <Box className='subscription_offers'>
                    <Box>
                        <Box>29% OFF</Box>
                        <Box>Price <s>Rs 149</s> <span className='main_price'>Rs 99</span></Box>
                    </Box>
                    <Button onClick={HandleSilver} colorScheme="facebook">SUBSCRIBE</Button>
                </Box>
            </Box>
        
        </Box>
    </Box>
  )
}

export default Subscription